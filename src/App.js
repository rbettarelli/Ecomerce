import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import MainRoutes from "./routes.js";
import { Container } from "@material-ui/core/";
import Header from "./components/Header.js";

const App = () => {

  const localCart = JSON.parse(localStorage.getItem("shopping: cart"))
if(localCart !== null)
{
  store.dispatch({
    type: "CHANGE_CART", localCart
  })
}  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
