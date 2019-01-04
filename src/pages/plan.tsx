// Imports
import * as React from 'react'

// Subpages
import { PlanPayment } from 'src/pages/plans/plan-payment'
import { PlanSelection } from 'src/pages/plans/plan-selection'

// Components
import { Footer } from 'src/components/footer'
import { PricingPlanVertical } from 'src/components/pricing-plan-vertical'
import { Switch } from 'src/components/switch'

export class Plan extends React.Component {
    state = {
        activePage: 'PlanSelection',
        isYearly: false
    }

    generatePageTitle = () => {
        let pageTitle

        if (window.location.href.indexOf('/plan#payment') !== -1) {
            return pageTitle = (
                <React.Fragment>
                    <h2 className="h3">Upgrade from <strong>Free</strong> to <strong>Ultimate</strong></h2>

                    <p className="form__note mt-1">You are about to upgrade to an <strong>Ultimate Plan</strong></p>

                    <p className="form__note mb-0">The Ultimate plan gives you access to all of the Cloud, Prototyping and Hand-off tools available in Supernova. Good choice!</p>
                </React.Fragment>
            )
        } else if (window.location.href.indexOf('/plan') !== -1 && window.location.href.indexOf('/plan#payment') === -1 && window.location.href.indexOf('/plan#success') === -1) {
            return pageTitle = (
                <React.Fragment>
                    <h2 className="h3">Personal Plan</h2>

                    <p className="form__note mt-1">You are currently on a <strong>Free plan</strong>.</p>

                    <p className="form__note mb-0">Upgrade to get access to all features that will save you a ton of time, such as CodeX, Cloud and more!</p>
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
            <React.Fragment>
                <div className="page page--plan">
                    <div className="page__title">
                        <div className="container">
                            <h1 className="h2">Personal Plans</h1>
                        </div>
                    </div>

                    <div className="page__body">
                        <div className="container">
                            <div className="page__content">
                                <div className="row align-items-end">
                                    <div className="col-md-7 col-lg-8 col-xl-9">
                                        {this.generatePageTitle()}
                                    </div>

                                    <div className="col-md-5 col-lg-4 col-xl-3">
                                        <div className={`switch__wrapper switch__wrapper${this.state.isYearly ? '--disabled' : '--enabled'}`}>
                                            <span className="switch__note">Save 20%</span>

                                            <span className="switch__label switch__label--left">Billed monthly</span>

                                            <Switch enabled={this.state.isYearly} />

                                            <span className="switch__label switch__label--right">Billed yearly</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="plans__row row mt-2">
                                    <div className="col-md-7 col-lg-8 col-xl-9">
                                        {window.location.href.indexOf('/plan#payment') !== -1 && <PlanPayment />}

                                        {window.location.href.indexOf('/plan') !== -1 && window.location.href.indexOf('/plan#payment') === -1 && <PlanSelection />}
                                    </div>

                                    <div className="col-md-5 col-lg-4 col-xl-3">
                                        <PricingPlanVertical isYearly={this.state.isYearly} type="Code" />
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

