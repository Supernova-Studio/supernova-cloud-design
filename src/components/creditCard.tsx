// Imports
import * as React from 'react'

type CreditCardProps = {
    brand: string;
    cardNumber: number;
    expirationDate: string;
    holder: string;
}

export class CreditCard extends React.PureComponent<CreditCardProps, {}> {
    // Render the app
    render() {
        return (<div className="credit-card">
            <div className="credit-card__brand">
                {this.props.brand}
            </div>

            <div className="credit-card__number">
                <span>****</span> <span>****</span> <span>****</span> <span>{this.props.cardNumber}</span>
            </div>

            <div className="credit-card__info">
                <div>
                    <span>Card holder</span>

                    <span>Expires</span>
                </div>

                <div>
                    <span>{this.props.holder}</span>

                    <span>{this.props.expirationDate}</span>
                </div>
            </div>
        </div>)
    }
}
