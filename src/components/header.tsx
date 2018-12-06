// Imports
import * as React from 'react'
import { Link } from 'react-router-dom'

// Dashboard header implementation
export class Header extends React.Component {
    state = {
        isProfileMenuOpened: false
    }

    handleProfileMenuToggle = (event) => {
        event.preventDefault()

        this.setState({
            isProfileMenuOpened: !this.state.isProfileMenuOpened
        })
    }

    // Render the menu of the dashboard
    render() {
        return (
            <header className="header">
              <div className="container">
                <div className="nav__wrapper">
                    <nav className="nav">
                        <ul className="nav--left">
                            <li>
                                <span className="nav-closer">{String.fromCharCode(215)}</span>
                            </li>

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
                            <li>
                                <a className="link--blue nav-link">Download Studio</a>
                            </li>

                            <li className="dropdown__container hide-md-down">
                                <a className="nav-link link--user dropdown__toggler" href="profile.html" onClick={this.handleProfileMenuToggle}>AD <span>{String.fromCharCode(9662)}</span></a>

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
                            </li>

                            <li>
                                <Link to="/settings"><span className="icon icon--settings" /></Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="nav-opener" type="button" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
              </div>
            </header>
        )
    }
}
