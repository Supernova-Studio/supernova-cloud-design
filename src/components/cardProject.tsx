// Imports
import * as React from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to="/project-details" className="card__thumbnail-link">
                        <img src={this.props.imageUrl ? this.props.imageUrl : ''} alt="" className="card__thumbnail" />
                    </Link>

                    <div className="header__links">
                        <button onClick={() => this.handleFavorite()}>
                            <span className={'icon ' + (this.state.isFavorite ? 'icon--favorite-active' : 'icon--favorite')} aria-label="Favorite" title="Favorite / Unfavorite" />
                        </button>

                        <Dropdown
                            align="right"
                            handleDropdownClick={() => this.handleDropdownClick()}
                            hasDividers={true}
                            isDropdownOpen={this.state.isDropdownOpen}
                            items={[
                                <React.Fragment key="drpProj_0">
                                    <span className="icon icon--trash-can" style={{ marginRight: '10px', width: '15px', height: '16px' }} /> Delete
                                </React.Fragment>,
                                <React.Fragment key="drpProj_1">
                                    <span className="icon icon--archive" style={{ marginRight: '10px', width: '16px', height: '13px' }} /> Archive
                                </React.Fragment>,
                                <React.Fragment key="drpProj_2">
                                    <span className="icon icon--settings" style={{ marginRight: '10px', width: '17px', height: '17px' }} /> Manage Team
                                </React.Fragment>
                            ]}
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
