// Imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Activity } from './pages/activity'
import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { Organization } from './pages/organization'

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
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
