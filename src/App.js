import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Landing from './component/Landing'

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component="Landing"/>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App