import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home';
import Update from './Pages/Update';

export default function Routes(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/atualizar/:id" component={Update} />
      </Switch>
    </Router>
  )
}
