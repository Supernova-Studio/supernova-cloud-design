// Imports
import * as React from 'react'

export class Activity extends React.Component {
    state = {
        eventsMenuOpened: false
    }

    handleEventsMenu = () => {
        this.setState({
            eventsMenuOpened: !this.state.eventsMenuOpened
        })
    }

    render() {
        return(
            <div className="page--activity">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Activity</h1>
                    </div>
                </div>

                <div className="page__filter filter">
                    <div className="container filter__container">
                        {/* Filter for mobile devices */}
                        <ul className="filter__nav filter__nav--mobile">
                            <li className="dropdown__container">
                                <a className="dropdown__toggler" href="" onClick={this.handleEventsMenu}>
                                    All events <span>{String.fromCharCode(9662)}</span>
                                </a>

                                <ul className={'dropdown__list dropdown__list--centered' + (this.state.eventsMenuOpened ? ' dropdown__list--visible' : '')}>
                                    <li className="dropdown__item">
                                        <a className="dropdown__link" href="">Messages</a>
                                    </li>

                                    <li className="dropdown__item">
                                        <a className="dropdown__link" href="">Projects</a>
                                    </li>

                                    <li className="dropdown__item">
                                        <a className="dropdown__link" href="">Team</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Filter for desktop devices */}
                        <ul className="filter__nav filter__nav--desktop filter__nav--left">
                            <li>
                                <a className="link--active" href="">All Events</a>
                            </li>

                            <li>
                                <a className="" href="">Projects</a>
                            </li>

                            <li>
                                <a className="" href="">Messages</a>
                            </li>

                            <li>
                                <a className="" href="">Team</a>
                            </li>
                        </ul>

                        <ul className="filter__nav filter__nav--desktop filter__nav--right">
                            <li>
                                <a href="#">Spacebook<span> {String.fromCharCode(9662)}</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

