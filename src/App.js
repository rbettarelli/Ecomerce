import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import MainRoutes from "./routes.js";
import { Container } from "@material-ui/core/";
import Header from "./components/Header.js";

const App = () => {
  return (
    <Provider>
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
