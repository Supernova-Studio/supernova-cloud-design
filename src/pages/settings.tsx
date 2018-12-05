// Imports
import * as React from 'react'

import { Sidebar } from './../components/sidebar'
import { SettingsAccount } from './../components/settingsAccount'
import { SettingsTeam } from './../components/settingsTeam'
import { SettingsBilling } from './../components/settingsBilling'
import { SettingsNotifications } from './../components/settingsNotifications'
import { SettingsDevices } from './../components/settingsDevices'
import { SettingsOrganizations } from './../components/settingsOrganizations'

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
            <div className="page--home">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Settings</h1>
                    </div>
                </div>

                <div className="page__body">
                    <Sidebar pageActive={this.state.activePage} linkClickHandler={(event, pageComponent) => this.handleSidebarLinkClick(event, pageComponent)} isOrganization={false} />

                    {this.state.activePage === 'account' && <SettingsAccount isPersonal={true} />}

                    {this.state.activePage === 'team' && <SettingsTeam />}

                    {this.state.activePage === 'billing' && <SettingsBilling isPersonal={true} />}

                    {this.state.activePage === 'notifications' && <SettingsNotifications />}

                    {this.state.activePage === 'devices' && <SettingsDevices />}

                    {this.state.activePage === 'organizations' && <SettingsOrganizations />}
                </div>
            </div>
        )
    }
}

