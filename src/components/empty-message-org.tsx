// Imports
import * as React from 'react'

import { Button } from './button'

type EmptyMessageOrgProps = {}

export class EmptyMessageOrg extends React.PureComponent<EmptyMessageOrgProps, {}> {
    // Render the app
    render() {
        return (<div className="empty-message empty-message--org">
            <span className="icon icon--building"></span>

            <h2 className="h3">You aren’t part of an organization yet!</h2>

            <p className="mt-2 mb-2">Organizations are geared towards teams, with advanced options such as assigning roles, billing management, shared projects and more.</p>

            <p className="mb-2">If you want to create an organization, proceed below. If the organization already exists within Supernova, ask the owner to invite you.</p>

            <Button label="Explore Team plans" type="primary" />
        </div>)
    }
}
