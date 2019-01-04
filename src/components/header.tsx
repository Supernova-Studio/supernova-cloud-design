// Imports
import * as React from 'react'
import { Link } from 'react-router-dom'

// Dashboard header implementation
export class Header extends React.Component {
    state = {
        hasAvatar: true,
        isFree: false,
        isProfileMenuOpened: false,
        userInitials: 'AD'
    }

    handleProfileMenuToggle = (event) => {
        event.preventDefault()

        this.setState({
            isProfileMenuOpened: !this.state.isProfileMenuOpened
        })
    }

    render() {
        return (
            <header className="header">
              <div className="container">
                <div className="nav__wrapper">
                    <Link to="/" className="hide-md-down"><img className="header__logo" src={require('../images/supernova-logo-white.svg')} alt="Supernova" /></Link>

                    <nav className="nav">
                        <Link to="/" className="hide-md-up"><img className="header__logo" src={require('../images/supernova-logo-white.svg')} alt="Supernova" /></Link>

                        <ul className="nav--left">
                            <li>
                                <Link className={window.location.href.indexOf('/projects') !== -1 ? 'nav-link link--active' : 'nav-link'} to="/projects">Projects</Link>
                            </li>

                            <li>
                                <Link className={window.location.href.indexOf('/activity') !== -1 ? 'nav-link link--active' : 'nav-link'} to="/activity">Activity</Link>
                            </li>

                            <li>
                                <Link className={window.location.href.indexOf('/organization') !== -1 ? 'nav-link link--active' : 'nav-link'} to="/organization">Organization</Link>
                            </li>
                        </ul>

                        <ul className="nav--right">
                            <li className="hide-md-down">
                                <a className="link--blue nav-link" href="#">Download Studio</a>
                            </li>

                            {this.state.isFree && <li className="hide-md-down">
                                <a className="link--blue nav-link" href="#">Upgrade to Pro</a>
                            </li>}

                            <li className="dropdown__container">
                                <a className="nav-link link--user dropdown__toggler" href="profile.html" onClick={this.handleProfileMenuToggle}>
                                    {
                                        this.state.hasAvatar ? (
                                            <img className="nav__avatar-photo" src={require('src/images/avatar-jiri.png')} alt={this.state.userInitials} />
                                        ) : (
                                            this.state.userInitials
                                        )
                                    }
                                    <span>{String.fromCharCode(9662)}</span>
                                </a>

                                <ul className={'dropdown__list dropdown__list--right' + (this.state.isProfileMenuOpened ? ' dropdown__list--visible' : '')}>
                                    <li className="dropdown__item dropdown__item-content nav__user-info">
                                        <span className="nav__user-label">Signed as</span>

                                        <strong className="nav__user-name">Alex Devero</strong>
                                    </li>

                                    <li className="dropdown__item dropdown__divider" />

                                    <li className="dropdown__item">
                                        <Link className="dropdown__link no-underline" to="/no-access">Your account</Link>
                                    </li>

                                    <li className="dropdown__item">
                                        <Link className="dropdown__link no-underline" to="/plan">Your plan</Link>
                                    </li>

                                    <li className="dropdown__item">
                                        <Link className="dropdown__link no-underline" to="/settings">Personal settings</Link>
                                    </li>

                                    <li className="dropdown__item dropdown__divider hide-md-down" />

                                    <li className="dropdown__item">
                                        <a className="dropdown__link no-underline" href="#">Help</a>
                                    </li>

                                    <li className="dropdown__item">
                                        <a className="dropdown__link no-underline" href="#">Sign out</a>
                                    </li>
                                </ul>

                                {this.state.isProfileMenuOpened && <div className="dropdown__overlay" onClick={this.handleProfileMenuToggle} />}
                            </li>

                            <li>
                                <Link to="/settings"><span className="icon icon--settings" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
              </div>
            </header>
        )
    }
}
