// Imports
import * as React from 'react'

import { Button } from 'src/components/button'
import { FormCreateOrg } from 'src/components/form-create-org'

export class CreateOrg extends React.Component {
    render() {
        return(
            <div className="page--create-org">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Create Organization</h1>
                    </div>
                </div>

                <div className="page__body body--create-org">
                    <div className="container">
                        <div>
                            <h2 className="h3">Account Details</h2>

                            <div className="row">
                                <div className="col-md-6 col-lg-9">
                                    <fieldset>
                                        <label htmlFor="orgName">Organization Name</label>

                                        <input id="orgName" name="orgName" type="text" defaultValue="" />
                                    </fieldset>

                                    <p className="mt-0 text--14">This is the name that will identify your whole organization. <strong>This cannot be changed.</strong></p>

                                    <fieldset>
                                        <label htmlFor="orgName">Billing Email</label>

                                        <input id="orgName" name="orgName" type="text" defaultValue="" />
                                    </fieldset>

                                    <p className="mt-0 text--14">All billing receipts will come to this email address. You can change this at any point.</p>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="create-org__box">
                                        <p className="text--14 text--center">Organizations allow you to manage your team much more effectively, assigning rights to each member, consolidating licenses and billing under one account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div>
                            <h2 className="h3">Select Team Size</h2>

                            <div className="row">
                                <div className="col-md-6 col-lg-8">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-8">
                                            <p className="text--14"><strong>Team plans are tailored for teams of 2 - 10 people</strong></p>

                                            <p className="text--14">Unlimited Cloud and Studio for the whole team. All prototyping and hand-off features. Extra team options - consolidated billing, improved security with SSO, 2FA and premium support.</p>
                                        </div>

                                        <div className="col-md-6 col-lg-4">
                                            <p className="text--14"><span className="text--20">{String.fromCharCode(36)}35</span><span>/month</span> <a className="link--blue" href="#!">(switch to yearly)*</a></p>

                                            <p className="text--14">per member - clients are free</p>

                                            <p className="text--14 text--gray">*save $84 per member by paying early</p>
                                        </div>
                                    </div>

                                    <p><strong>Members of the organization</strong></p>

                                    <div className="row">
                                        <div className="col-md-9 col-lg-10">
                                            <p>Members each get a Supernova Ultimate license and can create / edit / modify projects - usually your team. Clients can preview and provide feedback and don’t take up paid seats in your organization.</p>
                                        </div>

                                        <div className="col-md-3 col-lg-2">
                                            <fieldset className="d-flex justify-content-end">
                                                <input id="orgNumOfMembers" name="orgNumOfMembers" type="number" defaultValue="" />
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="create-org__box">
                                        <p className="text--14 text--center">Looking to add more than 10 members to your organization? Our enterprise plan is suited for larger companies.</p>

                                        <Button label="Get in touch" type="ghost" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div>
                            <h2 className="h3">Billing information</h2>

                            <div className="row">
                                <div className="col-md-6 col-lg-9">
                                    <FormCreateOrg />
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="create-org__box">
                                        <p className="text--14 text--center">Organization billing information is separate and is not shared with your personal Supernova account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
