import logo from './logo.svg';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import About from './Page/About';
import Service from './Page/Service';
import Offer from './Page/Offer';
import New from './Page/New';
import Home from './Page/Home'
import './App.css';
import Layout  from './HOC/Layout'

function App() {
  return (
   
       <>
        <Layout >

      <Switch>
        <Route path ="/" exact component = {Home} />
        <Route path ="/about"  component = {About} />
        <Route path ="/Services"  component = {Service} />
        <Route path="/offer"  component = {Offer} />
        <Route path="/new"  component = {New} />
      </Switch>
      </Layout>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
     </>
  );
}

export default App;
