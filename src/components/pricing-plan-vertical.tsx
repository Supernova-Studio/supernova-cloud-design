// Imports
import * as React from 'react'

import { Button } from './button'

type PricingPlanVerticalProps = {
    isYearly: boolean;
    type: 'Design' | 'Code' | 'Ultimate' | 'Free';
}

export class PricingPlanVertical extends React.PureComponent<PricingPlanVerticalProps, {}> {
    generatePlan = () => {
        switch (this.props.type) {
            case 'Code':
                return (
                    <div className="plan plan--vertical">
                        <div className="plan__head">
                            <span className="plan__icon icon icon--code" />

                            <h3 className="plan__title">Code</h3>

                            <h4 className="plan__subtitle">Exports code so you can innovate.</h4>

                            <span className="plan__price">{String.fromCharCode(36)}25 <span className="plan__period">{this.props.isYearly ? '/year' : '/month'}</span></span>

                            <span className="plan__save-note">Save $78 a year by paying annually.</span>
                        </div>

                        <div className="plan__body">
                            <ul className="plan__features">
                                <li><span className="plan__feature-icon" /> Full Prototyping Suite</li>

                                <li><span className="plan__feature-icon" /> Code Preview</li>

                                <li><span className="plan__feature-icon" /> Unlimited Teams</li>

                                <li><span className="plan__feature-icon" /> 1 Cloud Project</li>

                                <li><span className="plan__feature-icon" /> Export to iOS</li>

                                <li><span className="plan__feature-icon" /> Export to Android</li>

                                <li><span className="plan__feature-icon" /> Export to React Native</li>
                            </ul>
                        </div>

                        <div className="plan__footer">
                            <Button label={`Upgrade to ${this.props.type}`} type="primary" />
                        </div>
                    </div>
                )

            case 'Design':
                return (
                    <div className="plan plan--vertical">
                        <div className="plan__head">
                            <span className="plan__icon icon icon--design" />

                            <h3 className="plan__title">Design</h3>

                            <h4 className="plan__subtitle">Perfect for multiple projects.</h4>

                            <span className="plan__price">{String.fromCharCode(36)}15 <span className="plan__period">{this.props.isYearly ? '/year' : '/month'}</span></span>

                            <span className="plan__save-note">Save $78 a year by paying annually.</span>
                        </div>

                        <div className="plan__body">
                            <ul className="plan__features">
                                <li><span className="plan__feature-icon" /> Full Prototyping Suite</li>

                                <li><span className="plan__feature-icon" /> Studio CodeX Preview</li>

                                <li><span className="plan__feature-icon" /> Cloud CodeX</li>

                                <li><span className="plan__feature-icon" /> Unlimited Teams</li>

                                <li><span className="plan__feature-icon" /> Unlimited Cloud Projects</li>
                            </ul>
                        </div>

                        <div className="plan__footer">
                            <Button label={`Upgrade to ${this.props.type}`} type="primary" />
                        </div>
                    </div>
                )

            case 'Ultimate':
                return (
                    <div className="plan plan--vertical">
                        <div className="plan__head">
                            <span className="plan__icon icon icon--ultimate" />

                            <h3 className="plan__title">Ultimate</h3>

                            <h4 className="plan__subtitle">End-to-end design to code.</h4>

                            <span className="plan__price">{String.fromCharCode(36)}35 <span className="plan__period">{this.props.isYearly ? '/year' : '/month'}</span></span>

                            <span className="plan__save-note">Save $78 a year by paying annually.</span>
                        </div>

                        <div className="plan__body">
                            <ul className="plan__features">
                                <li><span className="plan__feature-icon" /> Full Prototyping Suite</li>

                                <li><span className="plan__feature-icon" /> Code Preview</li>

                                <li><span className="plan__feature-icon" /> Unlimited Teams</li>

                                <li><span className="plan__feature-icon" /> Unlimited Cloud Projects</li>

                                <li><span className="plan__feature-icon" /> Export to iOS</li>

                                <li><span className="plan__feature-icon" /> Export to Android</li>

                                <li><span className="plan__feature-icon" /> Export to React Native</li>

                                <li><span className="plan__feature-icon" /> Premium Support</li>
                            </ul>
                        </div>

                        <div className="plan__footer">
                            <Button label={`Upgrade to ${this.props.type}`} type="primary" />
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="plan plan--vertical">
                        <div className="plan__head">
                            <span className="plan__icon icon icon--:" />

                            <h3 className="plan__title">Free</h3>

                            <h4 className="plan__subtitle">Get started here. Forever free!</h4>

                            <span className="plan__price">{String.fromCharCode(36)}0 <span className="plan__period">{this.props.isYearly ? '/year' : '/month'}</span></span>

                            <span className="plan__save-note">Save $78 a year by paying annually.</span>
                        </div>

                        <div className="plan__body">
                            <ul className="plan__features">
                                <li><span className="plan__feature-icon" /> Full Prototyping Suite</li>

                                <li><span className="plan__feature-icon" /> CodeX Preview</li>

                                <li><span className="plan__feature-icon" /> Unlimited Teams</li>

                                <li><span className="plan__feature-icon" /> 1 Cloud Project</li>
                            </ul>
                        </div>

                        <div className="plan__footer">
                            <Button label={`Upgrade to ${this.props.type}`} type="primary" />
                        </div>
                    </div>
                )
        }
    }

    // Render the app
    render() {
        return (
            <React.Fragment>
                {this.generatePlan()}
            </React.Fragment>
        )
    }
}
