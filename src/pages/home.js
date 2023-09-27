import {
  Paper,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core/";
import React, {useState} from "react";
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
  const classes = useStyles();



  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h5">Categorias</Typography>
          <List>
            <Item  name="Times Nacionais" details="3" />
            <Item  name="Times Nacionais" details="3" />
            <Item  name="Times Nacionais" details="3" />
          </List>
        </Paper>
      </Grid>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/fla.jpg"/>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/alemanha.jpg"/>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/arsenal.jpg"/>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/milan.jpg"/>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/palmeiras.jpg"/>
      <Card name="Flamengo 2020" price="99.99" image="./images/produtos/brasil94.jpg "/>
    </Grid>
  );
};

export default Homepage;
