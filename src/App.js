import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
