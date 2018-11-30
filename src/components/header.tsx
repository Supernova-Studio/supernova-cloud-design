// Imports
import * as React from 'react'
import { Link } from 'react-router-dom'

// Dashboard header implementation
export class Header extends React.Component {
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

                            <li>
                                <button><span className="icon icon--settings" /></button>
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
