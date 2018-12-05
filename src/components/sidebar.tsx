// Imports
import * as React from 'react'

type SidebarProps = {
    isOrganization: boolean;
    linkClickHandler: Function;
    pageActive: string;
}

export class Sidebar extends React.PureComponent<SidebarProps, {}> {
    // Render the app
    render() {
        return <aside className="sidebar sidebar--settings">
            <h2 className="sidebar__heading">Personal settings</h2>

            <ul className="sidebar__list">
                <li>
                    <a onClick={() => this.props.linkClickHandler(event, 'account')} href="" className={this.props.pageActive === 'account' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                        <span className="icon icon--small icon--account"></span>

                        <span className="icon-label">Account</span>
                    </a>
                </li>

                {this.props.isOrganization && <li>
                    <a onClick={() => this.props.linkClickHandler(event, 'team')} href="" className={this.props.pageActive === 'team' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                        <span className="icon icon--small icon--team"></span>

                        <span className="icon-label">Team</span>
                    </a>
                </li>}

                <li>
                    <a onClick={() => this.props.linkClickHandler(event, 'billing')} href="" className={this.props.pageActive === 'billing' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                        <span className="icon icon--small icon--billing"></span>

                        <span className="icon-label">Billing</span>
                    </a>
                </li>

                {!this.props.isOrganization && <React.Fragment>
                    <li>
                        <a onClick={() => this.props.linkClickHandler(event, 'notifications')} href="" className={this.props.pageActive === 'notifications' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                            <span className="icon icon--small icon--notification"></span>

                            <span className="icon-label">Notifications</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => this.props.linkClickHandler(event, 'devices')} href="" className={this.props.pageActive === 'devices' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                            <span className="icon icon--small icon--device"></span>

                            <span className="icon-label">Devices</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => this.props.linkClickHandler(event, 'organizations')} href="" className={this.props.pageActive === 'organizations' ? 'sidebar__link sidebar__link--active' : 'sidebar__link'}>
                            <span className="icon icon--small icon--organization"></span>

                            <span className="icon-label">Organizations</span>
                        </a>
                    </li>
                </React.Fragment>}
            </ul>

            <h2 className="sidebar__heading">Available workspaces</h2>

            <ul className="sidebar__list">
                <li>
                    <a href="" className="sidebar__link">
                        <span>
                            <img className="avatar" src={require('images/avatar-jiri.png')} alt=""/>
                        </span>

                        <span className="icon-label">Personal</span>
                    </a>
                </li>
                <li>
                    <a href="" className="sidebar__link">
                        <span>
                            <img className="avatar" src={require('images/avatar-supernova.png')} alt=""/>
                        </span>

                        <span className="icon-label">Supernova Studio</span>
                    </a>
                </li>
            </ul>
        </aside>
    }
}
