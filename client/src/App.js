import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/pokemon/:id" component={Detail} />
          <Route path="/createpokemon" component={CreatePokemon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
