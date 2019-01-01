// Imports
import * as React from 'react'

import { CardScreen } from './../components/cardScreen'
import { Dropdown } from './../components/dropdown'

export class ProjectDetails extends React.Component {
    state = {
        isSharePopoverOpen: false
    }

    handleSharePopupOpen = () => {
        this.setState({
            isSharePopoverOpen: !this.state.isSharePopoverOpen
        })
    }

    generateScreens = () => {
        let screens: any = []

        for (let i = 0; i < 10; i++) {
            screens.push(
                <CardScreen
                    key={i}
                    imageUrl={require('images/spacebook.png')}
                    screenTitle="Welcome"
                />
            )
        }

        return screens
    }

    render() {
        return(
            <div className="page--project-details">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Spacebook</h1>
                    </div>
                </div>

                <div className="page__filter filter">
                    <div className="container filter__container">
                        <ul className="filter__nav filter__nav--left">
                            <li><a className="link--active" href="#">App screens</a></li>

                            <li><a href="#">Manage team</a></li>

                            <li className="hide-md-up">
                                <Dropdown
                                    align="right"
                                    handleDropdownClick={this.handleSharePopupOpen}
                                    hasDividers={true}
                                    isDropdownOpen={this.state.isSharePopoverOpen}
                                    items={['Twitter', 'Instagram', 'Facebook']}
                                    label={[<a className="filter__share-link" key="project_detail_0"><img src={require('images/icons/icon-share.svg')} alt="Share" />Share</a>]}
                                />
                            </li>
                        </ul>

                        <div className="filter__nav--slider">
                            <img src={require('images/icons/icon-grid-medium.svg')} alt="" />

                            <div className="slider">
                                <div className="slider__thumb" />

                                <div className="slider__fill" />

                                <div className="slider__track" />
                            </div>

                            <img src={require('images/icons/icon-grid-small.svg')} alt="" />
                        </div>

                        <ul className="filter__nav filter__nav--right">
                            <li className="hide-md-down">
                                <Dropdown
                                    align="right"
                                    handleDropdownClick={this.handleSharePopupOpen}
                                    hasDividers={true}
                                    isDropdownOpen={this.state.isSharePopoverOpen}
                                    items={['Twitter', 'Instagram', 'Facebook']}
                                    label={[<a className="filter__share-link" key="project_detail_0"><img src={require('images/icons/icon-share.svg')} alt="Share" />Share</a>]}
                                />
                            </li>

                            <li className="filter__input-wrapper">
                                <span className="filter__icon" />

                                <input
                                    className="filter__input"
                                    type="text"
                                    placeholder="Search to filter"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="page__body body--project-details">
                    <div className="container">
                        <div className="row project-details__row">
                            {this.generateScreens()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

