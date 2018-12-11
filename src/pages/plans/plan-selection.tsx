// Imports
import * as React from 'react'

import { Button } from '../../components/button'
import { PricingPlan } from '../../components/pricing-plan'

type PlanSelectionProps = {}

export class PlanSelection extends React.PureComponent<PlanSelectionProps, {}> {
    state = {
        isYearly: false
    }

    // Render the app
    render() {
        return (
            <React.Fragment>
                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Design" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={true} type="Code" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Ultimate" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Free" isVertical={false} />

                <h3 className="h3 mt-4">Teams &amp; Organizations</h3>

                <p className="form__note mt-1 mb-3">Looking for advanced team support and access rights, consolidated billing, better security and many more features? We offer team plans for both smaller and larger organizations. Create an organization to get started.</p>

                <Button label="Create new organization" type="primary" />
            </React.Fragment>
        )
    }
}
