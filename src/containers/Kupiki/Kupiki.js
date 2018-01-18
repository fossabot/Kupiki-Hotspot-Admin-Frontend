import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Dashboard from '../../views/System/Dashboard/';
import Administration from '../../views/System/Administration/';
import Simple from '../../views/Configuration/Simple';
import Profile from '../../views/User/Profile/';

class Kupiki extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            {/*<Breadcrumb />*/}
            <Container fluid>
              <Switch>
                <Route path="/system/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/system/administration" name="Administration" component={Administration}/>
                <Route path="/configuration/simple" name="Simple" component={Simple}/>
                <Route path="/user/profile" name="User Profile" component={Profile}/>
                <Redirect from="/" to="/system/dashboard"/>
              </Switch>
            </Container>
          </main>
          {/*<Aside />*/}
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default Kupiki;
