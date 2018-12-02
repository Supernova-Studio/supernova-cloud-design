// Imports
import * as React from 'react'

type CardScreenProps = {
    imageUrl?: string;
    screenTitle?: string;
}

export class CardScreen extends React.Component<CardScreenProps, {}> {
    // Render the app
    render() {
        return <div className="col-md-6 col-lg-4 col-xl-3 card__container">
            <div className="card card--project card--screen">
                <div className="card__header">
                    <img src={this.props.imageUrl ? this.props.imageUrl : ''} alt="" className="card__thumbnail" />

                    <a href="#" className="header__editor-link">{this.props.screenTitle}</a>
                </div>
            </div>
        </div>
    }
}
