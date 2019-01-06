// Imports
import * as React from 'react'

import { Button } from 'src/components/button'

type SettingsOrganizationsProps = {}

export class SettingsOrganizations extends React.PureComponent<SettingsOrganizationsProps, {}> {
    // Render the app
    render() {
        return (
            <div className="page__content page__content--org">
                <h2 className="h3">Organizations</h2>

                <p className="form__note mb-2">Organizations allow people to work together much more effectively by suggesting who to mention, providing quick ways to invite every team member at once, and allowing for complete management of access rights and licenses.</p>

                <div className="table-wrapper">
                    <div className="table table--gray table--organization table--scrollable ">
                        <div className="table__row">
                            <div className="table__cell">
                                <img src={require('./../../images/avatar-supernova-big.png')} alt="Supernova" />
                            </div>

                            <div className="table__cell">
                                Supernova Studio
                            </div>

                            <div className="table__cell">
                                3 active projects
                            </div>

                            <div className="table__cell">
                                Member
                            </div>

                            <div className="table__cell">
                                <a className="link--blue" href="#">Switch to workspace</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="h3 mt-4">Create organization</h2>

                <p className="form__note mb-2">Want to create a new organization? You’ll become the owner of the newly-created organization and will have the option to invite any remaining team members.</p>

                <Button label="Create new organization" type="primary" />

                {false && <p className="notification notification--full notification--gray">You are not a member of an organization yet. <br /> Contact the organization owner to get an invite or <a className="link--blue" href="#">create a new one</a> right away.</p>}
            </div>
        )
    }
}
