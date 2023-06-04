import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header"
import Filter from './components/Filter'
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <>
        <Header/>
        <Route exact path="/">
          <Filter />
        </Route>
        <Route path="/countries/:name"  children={<Country />}>
        </Route>
      </>  
    </Router>
  );
}

export default App;
