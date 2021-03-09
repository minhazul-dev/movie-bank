import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./component/movies/Movies";
import NotFound from "./component/NotFound/NotFound";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Movies></Movies>
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/movie/:id">
            <MovieDetails></MovieDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
