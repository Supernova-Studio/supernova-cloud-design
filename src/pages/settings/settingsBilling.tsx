// Imports
import * as React from 'react'

type SettingsBillingProps = {
    isPersonal: boolean;
}

export class SettingsBilling extends React.PureComponent<SettingsBillingProps, {}> {
    // Render the app
    render() {
        return (
            <div className="settings__content">
                <h2 className="h3">Billing</h2>
            </div>
        )
    }
}
