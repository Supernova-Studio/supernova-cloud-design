// Imports
import * as React from 'react'

type EmptyMessageProjectsProps = {}

export class EmptyMessageProjects extends React.PureComponent<EmptyMessageProjectsProps, {}> {
    // Render the app
    render() {
        return (<div className="empty-message empty-message--org text--center">
            <span className="icon icon--publish" />

            <p className="mb-1">You don’t have any shared projects.</p>

            <p className="mb-2">To start sharing, visit the Publish menu in <a href="#!" className="link--blue text--medium">Supernova Studio</a>.</p>

            <img className="empty-message__share" src={require('images/sharing-modal.png')} alt=""/>
        </div>)
    }
}
