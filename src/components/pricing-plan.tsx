// Imports
import * as React from 'react'

import { Button } from './button'

type PricingPlanProps = {
    isPopular: boolean;
    isYearly: boolean;
    isVertical: boolean;
    type: 'Design' | 'Code' | 'Ultimate' | 'Free';
}

export class PricingPlan extends React.PureComponent<PricingPlanProps, {}> {
    generateBody = () => {
        switch (this.props.type) {
            case 'Code':
                return (
                    <div className="plan__body">
                        <h3 className="plan__title">Code</h3>

                        <h4 className="plan__subtitle">Prototype, share and present your projects without limitations</h4>

                        <p className="plan__description">Unlimited access to Cloud, sharing, embedding, unlimited Cloud teams and all Studio prototyping tools</p>
                    </div>
                )

            case 'Design':
                return (
                    <div className="plan__body">
                        <h3 className="plan__title">Design</h3>

                        <h4 className="plan__subtitle">Build world-class interfaces and experience hand-off like never before</h4>

                        <p className="plan__description">Cloud and Studio CodeX, real-time code generation and unlimited export for iOS, Android and React Native</p>
                    </div>
                )

            case 'Ultimate':
                return (
                    <div className="plan__body">
                        <h3 className="plan__title">Ultimate</h3>

                        <h4 className="plan__subtitle">Empower your workflow and save hundreds of hours with full power of Supernova</h4>

                        <p className="plan__description">Unlimited access to Cloud, all prototyping tools and CodeX, plus export</p>
                    </div>
                )

            default:
                return (
                    <div className="plan__body">
                        <h3 className="plan__title">Free</h3>

                        <h4 className="plan__subtitle">Build MVPs and share your work with friends</h4>

                        <p className="plan__description">All prototyping tools, unlimited local projects and 1 Cloud project for your first endeavors with Supernova</p>
                    </div>
                )
        }
    }

    generateIcon = () => {
        let icon

        switch (this.props.type) {
            case 'Code':
                icon = 'code'
                break

            case 'Design':
                icon = 'glasses'
                break

            case 'Ultimate':
                icon = 'lightning'
                break

            default:
                icon = 'gift'
                break
        }

        return <span className={`plan__icon icon icon--${icon}`} />
    }

    generatePrice = () => {
        let price

        switch (this.props.type) {
            case 'Code':
                price = 25
                break

            case 'Design':
                price = 15
                break

            case 'Ultimate':
                price = 35
                break

            default:
                price = 0
                break
        }

        return <span className="plan__price">{String.fromCharCode(36)}{price}</span>
    }

    // Render the app
    render() {
        return (
            <div className={`plan${this.props.isPopular ? ' plan--popular' : ''} ${this.props.isVertical ? 'plan--vertical' : 'plan--horizontal'}`}>
                <div className="plan__head">
                    {this.generateIcon()}
                </div>

                {this.generateBody()}

                <div className="plan__footer">
                    {this.generatePrice()}

                    <span className="plan__period">{this.props.isYearly ? 'per year' : 'per month'}</span>

                    <Button label={`Upgrade to ${this.props.type}`} type="ghost" />
                </div>
            </div>
        )
    }
}
