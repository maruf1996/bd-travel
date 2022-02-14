import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AddService from './component/AddService/AddService';
import AuthProvider from './component/context/AuthProvider/AuthProvider';
import Login from './component/Login/Login';
import ManageOrder from './component/ManageOrder/ManageOrder';
import NotFound from './component/NotFound/NotFound';
import About from './component/Page/About/About';
import Contact from './component/Page/Contact/Contact';
import Home from './component/Page/Home/Home';
import ServiceDetails from './component/Page/Home/ServicesDetails/ServicesDetails';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import Footer from './component/Shared/Footer/Footer';
import Header from './component/Shared/Header/Header';
import UpdatedUser from './component/UpdatedUser/UpdatedUser';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <PrivateRoute path="/service/:serviceId">
          <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/services/update/:id">
          <UpdatedUser></UpdatedUser>
          </PrivateRoute>
          <Route path="/addService">
          <AddService></AddService>
          </Route>
          <Route path="/manege">
          <ManageOrder></ManageOrder>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
