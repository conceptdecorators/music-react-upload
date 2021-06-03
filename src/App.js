import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./Upload";
// import Home from "./Home";
// import About from "./About";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Sync from "./components/layout/Sync";
import Faq from "./components/layout/Faq";
import Home from "./components/layout/Home";
import Blog from "./components/layout/Blog";
import "./App.css";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Route path="/" exact component={Home} />
    //   <Route path="/feedback" exact component={Feedback} />
    //   <Route path="/about" exact component={About} />
    // </BrowserRouter>
    <div className="page-container">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/sync" component={Sync} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/upload" exact component={Upload} />
          </Switch>
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
