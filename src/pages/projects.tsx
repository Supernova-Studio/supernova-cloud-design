// Imports
import * as React from 'react'

import { CardProject } from './../components/cardProject'
import { Dropdown } from './../components/dropdown'

export class Projects extends React.Component {
    state = {
        favoriteMode: false,
        projectsMenuOpened: false,
        sortPopoverOpen: false
    }

    handleProjectsMenuToggle = () => {
        this.setState({
            projectsMenuOpened: !this.state.projectsMenuOpened
        })
    }

    handleSortPopupOpen = () => {
        this.setState({
            sortPopoverOpen: !this.state.sortPopoverOpen
        })
    }

    generateCards = () => {
        let cards: any = []

        for (let i = 0; i < 10; i++) {
            cards.push(
                <CardProject
                    key={i}
                    imageUrl={require('images/spacebook.png')}
                    title={`Card no.${i + 1}`}
                    user="Alex Devero"
                />
            )
        }

        return cards
    }

    render() {
        return(
            <div className="page--projects">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Projects</h1>
                    </div>
                </div>

                <div className="page__filter filter">
                    <div className="container filter__container">
                        {/* Filter for mobile devices */}
                        <ul className="filter__nav filter__nav--mobile">
                            <li className="dropdown__container">
                                <a className="dropdown__toggler" onClick={this.handleProjectsMenuToggle}>All projects <span>{String.fromCharCode(9662)}</span></a>

                                <ul className={'dropdown__list dropdown__list--centered'  + (this.state.projectsMenuOpened ? ' dropdown__list--visible' : '')}>
                                    <li className="dropdown__item">
                                        <a className="dropdown__link">All projects</a>
                                    </li>

                                    <li className="dropdown__item">
                                        <a className="dropdown__link">Favorites</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Filter for desktop devices */}
                        <ul className="filter__nav filter__nav--desktop filter__nav--left">
                            <li><a className={this.state.favoriteMode ? '' : 'link--active'} href="#">All projects</a></li>

                            <li><a className={this.state.favoriteMode ? 'link--active' : ''} href="#">Favorites</a></li>
                        </ul>

                        <ul className="filter__nav filter__nav--desktop filter__nav--right">
                            <li>
                                <Dropdown
                                    align="right"
                                    handleDropdownClick={this.handleSortPopupOpen}
                                    hasDividers={true}
                                    isDropdownOpen={this.state.sortPopoverOpen}
                                    items={['Sort by name', 'Sort by newest', 'Sort by oldest']}
                                    label={['Sort by ', <span key="drp_str_1">{String.fromCharCode(9662)}</span>]}
                                />
                            </li>

                            <li>
                                <input
                                    className="filter__input"
                                    type="text"
                                    placeholder="Filter projects"
                                    autoComplete="new-password" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="page__body body--projects">
                    <div className="container">
                        <div className="row project__row">
                            {this.generateCards()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

