// Imports
import * as React from 'react'

import { PlanPayment } from 'src/pages/plans/plan-payment'
import { PlanSelection } from 'src/pages/plans/plan-selection'
import { PlanSuccess } from 'src/pages/plans/plan-success'

import { PricingPlanVertical } from 'src/components/pricing-plan-vertical'
import { Switch } from 'src/components/switch'

export class Plan extends React.Component {
    state = {
        activePage: 'PlanSelection',
        isYearly: false
    }

    generatePageTitle = () => {
        let pageTitle

        if (window.location.href.indexOf('/plan#payment')  != -1) {
            return pageTitle = (
                <React.Fragment>
                    <h2 className="h3">Upgrade from Free to Ultimate</h2>

                    <p className="form__note">You are about to upgrade to an <strong>Ultimate Plan</strong></p>

                    <p className="form__note">The Ultimate plan gives you access to all of the Cloud, Prototyping and Hand-off tools available in Supernova. Good choice!</p>
                </React.Fragment>
            )
        } else if (window.location.href.indexOf('/plan#success') != -1) {
            return pageTitle = (
                <React.Fragment>
                    <h2 className="h3">All set! Time to build pixel-perfect apps with Supernova!</h2>

                    <p className="form__note">Your account has been successfully upgraded to <strong>Ultimate</strong>.</p>

                    <p className="form__note">Here are some resources that will help you master Supernova in no time. Or return to Cloud.</p>
                </React.Fragment>
            )
        } else if (window.location.href.indexOf('/plan') != -1 && window.location.href.indexOf('/plan#payment') === -1 && window.location.href.indexOf('/plan#success') === -1) {
            return pageTitle = (
                <React.Fragment>
                    <h2 className="h3">Upgrade from Free to Ultimate</h2>

                    <p className="form__note">You are about to upgrade to an <strong>Ultimate Plan</strong></p>

                    <p className="form__note">The Ultimate plan gives you access to all of the Cloud, Prototyping and Hand-off tools available in Supernova. Good choice!</p>
                </React.Fragment>
            )
        }

        return pageTitle
    }

    handlePageChange = (event, pageComponent: string) => {
        event.preventDefault()

        if (this.state.activePage === pageComponent) {
            return
        }

        this.setState({
            activePage: pageComponent
        })
    }

    handlePeriodChange = () => {
        this.setState({
            isYearly: !this.state.isYearly
        })
    }

    render() {
        return(
            <div className="page--home">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Personal Plans</h1>
                    </div>
                </div>

                <div className="page__body">
                    <div className="container">
                        <div className="settings__content">
                            {this.generatePageTitle()}

                            <div className={`switch__wrapper switch__wrapper${this.state.isYearly ? '--disabled' : '--enabled'}`}>
                                <span className="switch__note">Save 20%</span>

                                <span className="switch__label switch__label--left">Billed monthly</span>

                                <Switch enabled={this.state.isYearly} />

                                <span className="switch__label switch__label--right">Billed yearly</span>
                            </div>

                            <div className="row mt-1">
                                <div className="col-md-9">
                                    {window.location.href.indexOf('/plan#payment') != -1 && <PlanPayment />}

                                    {window.location.href.indexOf('/plan#success') != -1 && <PlanSuccess />}

                                    {window.location.href.indexOf('/plan') != -1 && window.location.href.indexOf('/plan#payment') === -1 && window.location.href.indexOf('/plan#success') === -1 && <PlanSelection />}
                                </div>

                                <div className="col-md-3">

                                    <PricingPlanVertical isYearly={this.state.isYearly} type="Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

