// Imports
import * as React from 'react'

import { Button } from './../../components/button'
import { CreditCard } from './../../components/creditCard'
import { FormBilling } from './../../components/formBilling'

type SettingsBillingProps = {
    isPersonal: boolean;
}

export class SettingsBilling extends React.PureComponent<SettingsBillingProps, {}> {
    state = {
        hasCard: false
    }

    // Render the app
    render() {
        return (
            <div className="settings__content settings__content--vertical">
                <h2 className="h3">Billing</h2>

                <div className="row">
                    <div className="col-md-8">
                        <div className="table">
                            <div className="table__row">
                                <div className="table__cell">
                                    <p className="table__cell-text">Current Plan</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    {
                                        this.props.isPersonal ? (
                                            <p className="table__cell-title">Personal Plan, Trialing (3 days left)</p>
                                        ) : (
                                            <p className="table__cell-title">Team Plan | 7 of 8 seats active</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="table table--gray mt-1">
                            <div className="table__row">
                                <div className="table__cell table__cell--top col-md-8">
                                    {
                                        this.props.isPersonal ? (
                                            <React.Fragment>
                                                <p className="table__cell-title">Want to automate the creation of interface code?</p>

                                                <p className="table__cell-text">Export production-ready code to iOS, Android, React Native Copy/Paste from CodeX, access to Cloud Codex</p>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <p className="table__cell-title">Need more than 10 people? Upgrade to Enterprise.</p>

                                                <p className="table__cell-text">99.95% guaranteed Cloud uptime SLA 24/7 email / chat support, dedicated Slack, &lt; 6h response</p>
                                            </React.Fragment>
                                        )
                                    }
                                </div>

                                <div className="table__cell table__cell--right col-md-4">
                                    {
                                        this.props.isPersonal ? (
                                            <React.Fragment>
                                                <p className="table__cell-text mb-0 text--20"><strong>$20</strong></p>

                                                <p className="table__cell-text mb-1">per month</p>

                                                <Button label="Upgrade" type="ghost" />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <p className="table__cell-text mb-0 text--20"><strong>Custom</strong></p>

                                                <p className="table__cell-text mb-1">per user / per month</p>

                                                <Button label="Contact us" type="ghost" />
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="table mt-2">
                            <div className="table__row">
                                <div className="table__cell">
                                    <p className="table__cell-text">Payment method</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    {
                                        this.props.isPersonal ? (
                                            <p className="table__cell-text"><strong>None</strong></p>
                                        ) : (
                                            <p className="table__cell-text"><strong>Visa **** **** **** 2290,</strong> expires <strong>09/2022</strong></p>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell">
                                    <p className="table__cell-text">Next payment</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    {
                                        this.props.isPersonal ? (
                                            <p className="table__cell-text"><strong>Never</strong></p>
                                        ) : (
                                            <p className="table__cell-text"><strong>12.02.2018</strong></p>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell">
                                    <p className="table__cell-text">Billing interval</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    {
                                        this.props.isPersonal ? (
                                            <p className="table__cell-text"><strong>None</strong></p>
                                        ) : (
                                            <p className="table__cell-text"><strong>Monthly</strong> {String.fromCharCode(124)} <a className="link--blue" href="#">Change to yearly</a></p>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell">
                                    <p className="table__cell-text">Amount billed per interval</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    {
                                        this.props.isPersonal ? (
                                            <p className="table__cell-text"><strong>None</strong></p>
                                        ) : (
                                            <p className="table__cell-text"><strong>{String.fromCharCode(36)}320.00</strong></p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h3 className="h6 mb-1">Credit Card</h3>

                        {
                            this.state.hasCard ? (
                                <React.Fragment>
                                    <CreditCard
                                        brand="Visa"
                                        cardNumber={2290}
                                        expirationDate="09/22"
                                        holder="Jiri Trecak"
                                    />

                                    <div className="mt-1">
                                        <Button label="Update" type="ghost" />
                                    </div>
                                </React.Fragment>
                            ) : (
                                <div className="table table--gray">
                                    <div className="table__row">
                                        <div className="table__cell table__cell--centered">
                                            <p className="table__cell-text">No payment information on file.</p>
                                        </div>
                                    </div>

                                    <div className="table__row mt-1 pt-0">
                                        <div className="table__cell table__cell--centered">
                                            <Button label="Add card" type="ghost" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <h2 className="h3 mt-4">Extra billing information</h2>

                <div className="row">
                    <div className="col-md-8">
                        <FormBilling />
                    </div>
                </div>

                <h2 className="h3 mt-4">Payment history</h2>

                {
                    this.props.isPersonal ? (
                        <p className="notification notification--full notification--gray">No payments have been made yet..</p>
                    ) : (
                        <div className="table table--gray">
                            <div className="table__row">
                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text"><strong>ID</strong></p>
                                </div>

                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text"><strong>Date</strong></p>
                                </div>

                                <div className="table__cell col-md-3">
                                    <p className="table__cell-text"><strong>Payment Method</strong></p>
                                </div>

                                <div className="table__cell col-md-1">
                                    <p className="table__cell-text"><strong>Billed</strong></p>
                                </div>

                                <div className="table__cell col-md-2" />
                            </div>

                            <div className="table__row">
                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">123456</p>
                                </div>

                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">01.02.2018</p>
                                </div>

                                <div className="table__cell col-md-3">
                                    <p className="table__cell-text">Visa ending in 2290</p>
                                </div>

                                <div className="table__cell col-md-1">
                                    <p className="table__cell-text">{String.fromCharCode(36)}52.00</p>
                                </div>

                                <div className="table__cell table__cell--right col-md-2">
                                    <p className="table__cell-text">
                                        <a className="link--blue" href="#"><strong>Receipt</strong></a>
                                    </p>
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">123456</p>
                                </div>

                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">01.02.2018</p>
                                </div>

                                <div className="table__cell col-md-3">
                                    <p className="table__cell-text">Visa ending in 2290</p>
                                </div>

                                <div className="table__cell col-md-1">
                                    <p className="table__cell-text">{String.fromCharCode(36)}52.00</p>
                                </div>

                                <div className="table__cell table__cell--right col-md-2">
                                    <p className="table__cell-text">
                                        <a className="link--blue" href="#"><strong>Receipt</strong></a>
                                    </p>
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">123456</p>
                                </div>

                                <div className="table__cell col-md-2">
                                    <p className="table__cell-text">01.02.2018</p>
                                </div>

                                <div className="table__cell col-md-3">
                                    <p className="table__cell-text">Visa ending in 2290</p>
                                </div>

                                <div className="table__cell col-md-1">
                                    <p className="table__cell-text">{String.fromCharCode(36)}52.00</p>
                                </div>

                                <div className="table__cell table__cell--right col-md-2">
                                    <p className="table__cell-text">
                                        <a className="link--blue" href="#"><strong>Receipt</strong></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
