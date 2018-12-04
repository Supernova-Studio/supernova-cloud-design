// Imports
import * as React from 'react'

import { Sidebar } from './../components/sidebar'
import { Account } from './../components/account'
import { Team } from './../components/team'
import { Billing } from './../components/billing'
import { Notifications } from './../components/notifications'
import { Devices } from './../components/devices'
import { Organizations } from './../components/organizations'

export class Settings extends React.Component {
    state = {
        isAccountVisible: false,
        isTeamVisible: false,
        isBillingVisible: false,
        isNotificationsVisible: false,
        isDevicesVisible: false,
        isOrganizationsVisible: false
    }

    handleSidebarLinkClick = (event, pageComponent) => {
        event.preventDefault()

        console.log(pageComponent)

        this.setState({
            [pageComponent]: !this.state[pageComponent]
        })
    }

    render() {
        return(
            <div className="page--home">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Settings</h1>
                    </div>
                </div>

                <div className="page__body">
                    <Sidebar linkClickHandler={(event, pageComponent) => this.handleSidebarLinkClick(event, pageComponent)} isOrganization={false} />

                    {this.state.isAccountVisible && <Account />}

                    {this.state.isTeamVisible && <Team />}

                    {this.state.isBillingVisible && <Billing />}

                    {this.state.isNotificationsVisible && <Notifications />}

                    {this.state.isDevicesVisible && <Devices />}

                    {this.state.isOrganizationsVisible && <Organizations />}
                </div>
            </div>
        )
    }
}

