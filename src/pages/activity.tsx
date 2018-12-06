// Imports
import * as React from 'react'

import { CardActivityComments } from './../components/cardActivityComments'
import { CardActivityMember } from './../components/cardActivityMember'
import { CardActivityProject } from './../components/cardActivityProject'
import { Dropdown } from './../components/dropdown'

export class Activity extends React.Component {
    state = {
        isProjectsMenuOpened: false
    }

    handleProjectsMenu = () => {
        this.setState({
            isProjectsMenuOpened: !this.state.isProjectsMenuOpened
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
                                <a className="dropdown__toggler" href="">
                                    All events <span>{String.fromCharCode(9662)}</span>
                                </a>

                                <ul className={'dropdown__list dropdown__list--centered' + (this.state.isProjectsMenuOpened ? ' dropdown__list--visible' : '')}>
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
                                <Dropdown
                                    align="right"
                                    handleDropdownClick={this.handleProjectsMenu}
                                    hasDividers={true}
                                    isDropdownOpen={this.state.isProjectsMenuOpened}
                                    items={['Spacebook', 'Playbook', 'Comicbook']}
                                    label={['Showing ', <strong key="drp_str_0">Spacebook</strong>, <span key="drp_str_1">{String.fromCharCode(9662)}</span>]}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="page__body body--activity">
                    <div className="container">
                        <div className="row activity__row">
                            <CardActivityComments
                                comments={[
                                    [
                                        ['Jiri Trecak'],
                                        ['We really need this like yesterday. What’s the hold up?'],
                                        [require('../images/avatar-jiri.png')]
                                    ],
                                    [
                                        ['Maris Naylor'],
                                        ['Sadly, I don’t think there is enough tea in the world to make this a pleasant task.'],
                                        [require('../images/avatar-drax.png')]
                                    ],
                                    [
                                        ['Vaclav Lustek'],
                                        ['Mkay, let me make some tea and get to it.'],
                                        [require('../images/avatar-iron-man.png')]
                                    ]
                                ]}
                                numOfComments={3}
                                nameOfProject="Supernova Example"
                                nameOfScreen="Login"
                                time="10 min ago"
                            />

                            <CardActivityMember
                                avatarImageUrl={require('../images/avatar-jiri.png')}
                                cardType="joined"
                                teamName="S.T.A.R. Labs"
                                teamSize="8"
                                time="2:45 pm"
                                username="Jiri Trecak"
                            />

                            <CardActivityMember
                                avatarImageUrl={require('../images/avatar-drax.png')}
                                cardType="left"
                                teamName="S.T.A.R. Labs"
                                teamSize="8"
                                time="9:13 am"
                                username="Eobard Thawne"
                            />

                            <CardActivityProject
                                avatarImageUrl={require('../images/avatar-jiri.png')}
                                cardType="updated"
                                numOfScreens={8}
                                projectName="Supernova Example"
                                projectThumbnail={require('../images/spacebook-thumbnail-small.png')}
                                projectThumbnailAlt="Supernova Example"
                                screensAdded={2}
                                screensRemoved={3}
                                screensUpdated={8}
                                time="1:30 pm"
                                username="Jiri Trecak"
                            />

                            <CardActivityProject
                                avatarImageUrl={require('../images/avatar-jiri.png')}
                                cardType="created"
                                numOfScreens={8}
                                projectName="Supernova Example"
                                projectThumbnail={require('../images/spacebook-thumbnail-small.png')}
                                projectThumbnailAlt="Supernova Example"
                                screensAdded={0}
                                screensRemoved={0}
                                screensUpdated={0}
                                time="1:30 pm"
                                username="Jiri Trecak"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

