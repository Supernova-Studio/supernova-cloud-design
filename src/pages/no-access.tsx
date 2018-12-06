// Imports
import * as React from 'react'

import { Sidebar } from './../components/sidebar'

export class NoAccess extends React.Component {
    state = {
        activePage: 'account'
    }

    render() {
        return(
            <div className="page--settings">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Settings</h1>
                    </div>
                </div>

                <div className="page__body">
                    <Sidebar pageActive={this.state.activePage} linkClickHandler={(event) => {event.preventDefault()}} isOrganization={true} />

                    <div className="settings__content">
                        <h2 className="h3">Organization Profile</h2>

                        <p className="form__note">Organizations allow people to work together much more effectively by suggesting who to mention, providing quick ways to invite every team member at once, and allowing for complete management of access rights and licenses.</p>

                        <p className="notification notification--blue">Only organization owners can change the details of the organization. If you wish to make a change, please contact the organization owner, Jiří Třečák (Bobramyl) at <a className="link--blue" href="#">jiri@supernova.io</a>.</p>

                        <h2 className="h3 mt-4">Organization Profile</h2>

                        <p className="form__note">To add, review, and remove team members, visit <a className="link--blue" href="#">Organization Details</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

