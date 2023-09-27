import {Grid, Paper, Button, Typography, makeStyles} from  '@material-ui/core' 
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart'

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

const Card = ({product, children}) => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch() 

    const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <img
              width="140px"
              src={product.image}
              alt={product.name_product}
            />
            <Typography variant="h6">{children}</Typography>
            <Typography variant="subtitle1">R$ {product.price}</Typography>
          </Grid>
          <Button variant="contained" onClick={()=> dispatch(cartActions.Add(cart, product))}>Adicionar</Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
