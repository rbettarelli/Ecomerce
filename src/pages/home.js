import {
  Paper,
  Grid,
  Typography,

  List,
  
 
  makeStyles,
} from "@material-ui/core/";
import React from "react";
import { useSelector } from "react-redux";
import Item from "../components/Item";
import Card from "../components/Card";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Homepage = () => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  const categories = products.map((category) => {
    const container = {};
    container["id"] = category.id_categorys;
    container["name"] = category.name_categorys;
    return container;
  });
  const category = categories
    .map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

    const arrayCategory = categories.map(category => category.name)
    let count = {}

    for(let i = 0; i < arrayCategory.length; i++){
      {
        let key = arrayCategory[i]
        count[key] = (count[key] ? count[key] + 1 : 1)
      }
    }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5">Categorias</Typography>
          <List>
            {category.map((item) => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  details={count[item.name]}
                />
              );
            })}
          </List>
        </Paper>
      </Grid>
      {products.map((item) => {
        return (
          <Card
            key={item.id_product}
            product={item}
            
          >
            {" "}
            {item.name_product}{" "}
          </Card>
        );
      })}
    </Grid>
  );
};



export default (Homepage);
