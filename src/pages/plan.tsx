// Imports
import * as React from 'react'

import { PlanSelection } from 'src/pages/plans/plan-selection'

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
                            <div className="col-md-7">
                                {this.state.activePage === 'PlanSelection' && <PlanSelection />}
                            </div>


                            <div className="col-md-5">
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

