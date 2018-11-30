// Imports
import * as React from 'react'

import { Dropdown } from './../components/dropdown'

type CardProjectProps = {
    imageUrl?: string;
    title?: string;
    user?: string;
}

export class CardProject extends React.Component<CardProjectProps, {}> {
    state = {
        isDropdownOpen: false,
        isFavorite: false
    }

    handleFavorite() {
        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }

    handleDropdownClick() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        })
    }

    // Render the app
    render() {
        return <div className="col-md-6 col-lg-4 col-xl-3 card__container">
            <div className="card card--project">
                <div className="card__header">
                    <img src={this.props.imageUrl ? this.props.imageUrl : ''} alt="" className="card__thumbnail" />

                    <div className="header__links">
                        <button onClick={() => this.handleFavorite()}>
                            <span className={'icon ' + (this.state.isFavorite ? 'icon--favorite-active' : 'icon--favorite')} aria-label="Favorite" title="Favorite / Unfavorite" />
                        </button>

                        <Dropdown
                            align="right"
                            handleDropdownClick={() => this.handleDropdownClick()}
                            hasDividers={true}
                            isDropdownOpen={this.state.isDropdownOpen}
                            items={['Archive', 'Delete', 'Manage Team']}
                            label={<span className="icon icon--menu"/>}
                        />
                    </div>

                    <a href="#" className="header__editor-link">
                        <img src={require('images/supernova-logo-white.svg')} alt="" className="logo--supernova" /> Open editor
                    </a>
                </div>
            </div>

            <div className="card__content">
                <h1 className="card__title">{this.props.title ? this.props.title : 'Random project'}</h1>

                <h2 className="card__subtitle">Version 2, updated <time dateTime="2017-10-30">15 minutes ago</time></h2>
            </div>

            <div className="card__contributors">
                <ul>
                    <li>
                        <img src={require('images/avatar-stark.png')} alt="" />
                    </li>

                    <li>
                        <img src={require('images/avatar-iron-man.png')} alt="" />
                    </li>

                    <li>
                        <img src={require('images/avatar-drax.png')} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    }
}
