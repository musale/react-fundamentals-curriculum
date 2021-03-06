var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require("../components/Main");
var Home = require("../components/Home");
var ShowCityContainer = require("../containers/ShowCityContainer");
var CityDetailContainer = require("../containers/CityDetailContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forecast/:city" component={ShowCityContainer}/>
      <Route path="detail/:city" component={CityDetailContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
