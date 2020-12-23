import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vote from "./components/Vote";
import Images from "./components/Images";
import Favourites from "./components/Favourites";
import Upload from "./components/Upload";




function App() {
  return (
    <Router>
      <div className="app">
      <Header />
      <Switch>
          <Route exact path="/">
            <Vote />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
