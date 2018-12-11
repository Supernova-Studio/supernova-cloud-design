// Imports
import * as React from 'react'

import { PlanPayment } from 'src/pages/plans/plan-payment'
import { PlanSelection } from 'src/pages/plans/plan-selection'
import { PlanSuccess } from 'src/pages/plans/plan-success'

import { PricingPlan } from 'src/components/pricing-plan'
import { Switch } from 'src/components/switch'

export class Plan extends React.Component {
    state = {
        activePage: 'PlanSelection',
        isYearly: false
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
                        <div className="row">
                            <div className="col-md-9">
                                {window.location.href.indexOf('/plan#payment') != -1 && <PlanPayment />}

                                {window.location.href.indexOf('/plan#success') != -1 && <PlanSuccess />}

                                {window.location.href.indexOf('/plan') != -1 && window.location.href.indexOf('/plan#payment') === -1 && window.location.href.indexOf('/plan#success') === -1 && <PlanSelection />}
                            </div>

                            <div className="col-md-3">
                                <Switch enabled={this.state.isYearly} />

                                <PricingPlan isYearly={this.state.isYearly} isPopular={true} type="Code" isVertical={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

