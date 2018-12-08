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
            <div className="settings__content">
                <h2 className="h3">Personal Plan</h2>

                <p className="form__note">You are currently on a <strong>Free plan</strong>.</p>

                <p className="form__note">Upgrade to get access to all features that will save you a ton of time, such as CodeX, Cloud and more!</p>

                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Design" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={true} type="Code" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Ultimate" isVertical={false} />

                <PricingPlan isYearly={this.state.isYearly} isPopular={false} type="Free" isVertical={false} />

                <h3 className="h3">Teams &amp; Organizations</h3>

                <p className="form__note">Looking for advanced team support and access rights, consolidated billing, better security and many more features? We offer team plans for both smaller and larger organizations. Create an organization to get started.</p>

                <Button label="Create new organization" type="primary" />
            </div>
        )
    }
}
