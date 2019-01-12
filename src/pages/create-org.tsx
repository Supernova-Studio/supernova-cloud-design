// Imports
import * as React from 'react'

import { Button } from 'src/components/button'
import { FormCreateOrg } from 'src/components/form-create-org'
import { Footer } from 'src/components/footer'

export class CreateOrg extends React.Component {
    generateCreateOrgTable = () => {
        let tableContent: any = []

        for (let i = 0; i < 3; i++) {
            tableContent.push(
                <div className="table__row" key={`tableCreateOrgRow_${i}`}>
                    <div className="table__cell table__cell--left col-md-6 col-xl-7">
                        <div className="organization-table__member">
                            <div className="organization-table__avatar">
                                <img src={require('src/images/avatar-stark.png')} alt="Barry Allen" />
                            </div>

                            <div className="d-flex align-items-center">ballen@starlabs.com</div>
                        </div>
                    </div>

                    <div className="table__cell table__cell--centered col-md-3 mt-md-down-1 mb-md-down-1 px-md-up-1">
                        <select id="tableOrgSelect" name="tableOrgSelect" defaultValue="Owner">
                            <option value="Owner">Member</option>
                            <option value="Owner">Owner</option>
                            <option value="Quest">Quest</option>
                        </select>
                    </div>

                    <div className="table__cell table__cell--right col-md-3 col-xl-2">
                        <a href="#!" className="link--blue">Remove</a>
                    </div>
                </div>
            )
        }

        return tableContent
    }

    render() {
        return(
            <React.Fragment>
                <div className="page page--create-org">
                    <div className="page__title">
                        <div className="container">
                            <h1 className="h2">Create Organization</h1>
                        </div>
                    </div>

                    <div className="page__body body--create-org pt-2 pb-2">
                        <div className="container">
                            <div>
                                <h2 className="h3 mb-2">Account Details</h2>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <fieldset>
                                                    <label className="text--medium" htmlFor="orgName">Organization Name</label>

                                                    <input id="orgName" name="orgName" type="text" defaultValue="" />
                                                </fieldset>

                                                <p className="mt-half mb-0 text--14">This is the name that will identify your whole organization. <strong>This cannot be changed.</strong></p>
                                            </div>

                                            <div className="col-sm-6 mt-sm-down-2">
                                                <fieldset>
                                                    <label className="text--medium" htmlFor="orgName">Billing Email</label>

                                                    <input id="orgName" name="orgName" type="text" defaultValue="" />
                                                </fieldset>

                                                <p className="mt-half mb-0 text--14">All billing receipts will come to this email address. You can change this at any point.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-md-down-1">
                                        <p className="text--14 mt-1 mb-0">Organizations allow you to manage your team much more effectively, assigning rights to each member, consolidating licenses and billing under one account.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="divider mt-4 mb-4" />

                            <div>
                                <h2 className="h3 mb-2">Invite Team Members</h2>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="table table--rounded">
                                            <div className="table_header">
                                                <div className="table__row">
                                                    <div className="table__cell table__cell--left col-md-3 text--14 text--bold">Add members</div>
                                                </div>

                                                <div className="table__row mt-half pt-0">
                                                    <div className="table__cell table__cell--left col-md-6 col-xl-7">
                                                        <input id="inputEmail" name="inputEmail" type="email" defaultValue="Enter email address" />
                                                    </div>

                                                    <div className="table__cell table__cell--centered col-md-3 mt-md-down-1 mb-md-down-1 px-md-up-1">
                                                        <select id="tableOrgSelect" name="tableOrgSelect" defaultValue="Member">
                                                            <option value="Owner">Member</option>
                                                            <option value="Owner">Owner</option>
                                                            <option value="Quest">Quest</option>
                                                        </select>
                                                    </div>

                                                    <div className="table__cell table__cell--right col-md-3 col-xl-2">
                                                        <Button label="Add member" type="primary" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="table__body">
                                                {this.generateCreateOrgTable()}
                                            </div>
                                        </div>

                                        {/* <p className="text--14 mb-0"><strong><span className="text--20">{String.fromCharCode(36)}35</span><span>/month</span> <a className="link--blue" href="#!">(switch to yearly)*</a></strong></p> */}
                                    </div>

                                    <div className="col-lg-4 mt-lg-down-2">
                                        <p className="text--14"><strong>Team plans are tailored for teams of 2 - 10 people</strong></p>

                                        <p className="text--14">Unlimited Cloud and Studio for the whole team. All prototyping and hand-off features.</p>

                                        <p className="text--14">Extra team options - consolidated billing, access management, license management, premium support, and early access to cutting-edge features.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="divider mt-4 mb-4" />

                            <div>
                                <h2 className="h3 mb-2">Billing information</h2>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <p className="mb-2">Organization billing information is separate and is not shared with your personal Supernova account.</p>

                                        <FormCreateOrg />
                                    </div>

                                    <div className="col-lg-4 mt-lg-down-2">
                                        <p className="text--14"><strong>Members of the organization</strong></p>

                                        <p className="text--14">Members each get a Supernova Ultimate license and can create / edit / modify projects - usually your team.</p>

                                        <p className="text--14">Clients can preview and provide feedback and <strong>don’t take up paid seats</strong> in your organization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}
