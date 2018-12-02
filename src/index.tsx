// Imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Activity } from './pages/activity'
import { Account } from './pages/account'
import { Home } from './pages/home'
import { Plan } from './pages/plan'
import { Projects } from './pages/projects'
import { Organization } from './pages/organization'
import { Settings } from './pages/settings'

import { Header } from './components/header'

import './styles/styles.css'

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Header />

                    <Route path="/" component={Home} exact={true} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/organization" component={Organization} />
                    <Route path="/account" component={Account} />
                    <Route path="/plan" component={Plan} />
                    <Route path="/settings" component={Settings} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
