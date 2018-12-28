// Imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Activity } from './pages/activity'
import { Account } from './pages/account'
import { Home } from './pages/home'
import { ForgotPassword } from './pages/forgot-password'
import { Plan } from './pages/plan'
import { PlanSuccess } from './pages/plans/plan-success'
import { NoAccess } from './pages/no-access'
import { Projects } from './pages/projects'
import { ProjectDetails } from './pages/project-details'
import { Organization } from './pages/organization'
import { Settings } from './pages/settings'
import { SignIn } from './pages/sign-in'

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
                    <Route path="/project-details" component={ProjectDetails} />
                    <Route path="/account" component={Account} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/no-access" component={NoAccess} />
                    <Route path="/organization" component={Organization} />
                    <Route path="/plan" component={Plan} />
                    <Route path="/plan-success" component={PlanSuccess} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/sign-in" component={SignIn} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
