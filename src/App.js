import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Landing from './component/Landing'


import Login from './component/Login/login'
import Signup from './component/Signup/signup'

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
                {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default App