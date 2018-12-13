// Imports
import * as React from 'react'

import { Button } from 'src/components/button'

export class Organization extends React.Component {
    handleRowClick = (event) => {
        event.currentTarget.classList.toggle('table__row-active')
    }

    generateOrgTable = () => {
        let tableContent: any = []

        for (let i = 0; i < 7; i++) {
            tableContent.push(
                <div className="table__row" key={`tableOrgRow_${i}`} onClick={this.handleRowClick}>
                    <div className="table__cell table__cell--left col-md-4">
                        <div className="organization-table__member">
                            <div className="organization-table__avatar">
                                <img src={require('src/images/avatar-stark.png')} alt="Barry Allen" />
                            </div>

                            <div>
                                <span className="organization-table__name">Barry Allen</span>

                                <span className="organization-table__email">ballen@starlabs.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="table__cell table__cell--centered col-md-2">
                        <select id="tableOrgSelect" name="tableOrgSelect" defaultValue="Owner">
                            <option value="Owner">Owner</option>
                            <option value="Quest">Quest</option>
                        </select>
                    </div>

                    <div className="table__cell table__cell--centered col-md-3">
                        <span className="organization-table__group-status">Ungrouped</span>
                    </div>

                    <div className="table__cell table__cell--right col-md-3">
                        <span className="organization-table__time">Last active 46m ago</span>
                    </div>
                </div>
            )
        }

        return tableContent
    }

    render() {
        return(
            <div className="page--organization">
                <div className="page__title">
                    <div className="container">
                        <div className="organization-page__logo">
                            <img src={require('src/images/logo-star-laboratories.png')} alt=""/>
                        </div>

                        <h1 className="h2 organization-page__name">Organization</h1>

                        <p className="organization-page__size">40 Members</p>
                    </div>
                </div>

                <div className="settings__content">
                    <div className="container">
                        <div className="organization__filter">
                            <ul className="list--inline">
                                <li>
                                    <a className="link--blue" href="#"><span className="icon icon--person"></span> Assign Role (3)</a>
                                </li>

                                <li>
                                    <a className="link--blue" href="#"><span className="icon icon--team"></span> Assign Group (3)</a>
                                </li>

                                <li>
                                    <a className="link--blue" href="#"><span className="icon icon--trash"></span> Remove (3)</a>
                                </li>
                            </ul>

                            <ul className="list--inline">
                                <li>
                                    <a className="link--blue" href="#">Pending Invitations (1)</a>
                                </li>

                                <li>
                                    <Button label="Invite Members" type="primary" />
                                </li>
                            </ul>
                        </div>

                        <div className="table">
                            {this.generateOrgTable()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

