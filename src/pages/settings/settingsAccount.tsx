// Imports
import * as React from 'react'

import { Button } from './../../components/button'
import { FormPersonal } from './../../components/formPersonal'
import { FormOrg } from './../../components/formOrg'

type SettingsAccountProps = {
    isPersonal: boolean;
}

export class SettingsAccount extends React.PureComponent<SettingsAccountProps, {}> {
    // Render the app
    render() {
        return (
            <div className="page__content">
                <h2 className="h3">{this.props.isPersonal ? 'Public profile' : 'Organization profile'}</h2>

                <div className="settings__profile row">
                    <div className="col-md-7">
                        <div className="settings__form">
                            {this.props.isPersonal ? <FormPersonal /> : <FormOrg />}
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="settings__avatar">
                            <h3 className="text--small">{this.props.isPersonal ? 'Profile picture' : 'Company Logo'}</h3>

                            <img src={require('./../../images/avatar-jiri-big.png')} alt="Avatar image" />

                            <div className="settings__avatar-btns">
                                <Button label="Generate random" type="ghost" />

                                <Button label="Upload" type="ghost" />
                            </div>

                            {!this.props.isPersonal && (
                                <React.Fragment>
                                    <div className="settings__avatar-color">
                                        <h3 className="text--small">Primary Color</h3>

                                        <div className="input-group input--color-picker">
                                            <input type="text" />

                                            <div />
                                        </div>

                                        <Button label="Update" type="ghost" />
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>

                {!this.props.isPersonal && <React.Fragment>
                    <h2 className="h3 mt-4">Organization Team</h2>

                    <p className="form__note">To add, review, and remove team members, visit <a className="link--blue" href="#">Organization Details</a>.</p>
                </React.Fragment>}
            </div>
        )
    }
}
