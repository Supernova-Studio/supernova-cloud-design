// Imports
import * as React from 'react'

import { Sidebar } from './../components/sidebar'
import { SettingsAccount } from './settings/settingsAccount'
import { SettingsTeam } from './settings/settingsTeam'
import { SettingsBilling } from './settings/settingsBilling'
import { SettingsNotifications } from './settings/settingsNotifications'
import { SettingsDevices } from './settings/settingsDevices'
import { SettingsOrganizations } from './settings/settingsOrganizations'

export class Settings extends React.Component {
    state = {
        activePage: 'account'
    }

    handleSidebarLinkClick = (event, pageComponent: string) => {
        event.preventDefault()

        if (this.state.activePage === pageComponent) {
            return
        }

        // TODO:
        // - [] - add dynamic imports for page components (facebook.github.io/create-react-app/docs/code-splitting)

        this.setState({
            activePage: pageComponent
        })
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
                    <div className="container">
                        <Sidebar pageActive={this.state.activePage} linkClickHandler={(event, pageComponent) => this.handleSidebarLinkClick(event, pageComponent)} isOrganization={false} />

                        {this.state.activePage === 'account' && <SettingsAccount isPersonal={true} />}

                        {this.state.activePage === 'team' && <SettingsTeam />}

                        {this.state.activePage === 'billing' && <SettingsBilling isPersonal={true} />}

                        {this.state.activePage === 'notifications' && <SettingsNotifications />}

                        {this.state.activePage === 'devices' && <SettingsDevices />}

                        {this.state.activePage === 'organizations' && <SettingsOrganizations />}
                    </div>
                </div>
            </div>
        )
    }
}

