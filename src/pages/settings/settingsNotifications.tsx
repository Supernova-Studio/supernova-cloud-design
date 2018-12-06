// Imports
import * as React from 'react'

import { Switch } from 'src/components/switch'

type SettingsNotificationsProps = {}

export class SettingsNotifications extends React.PureComponent<SettingsNotificationsProps, {}> {
    // Render the app
    render() {
        return (
            <div className="settings__content settings--notifications">
                <h2 className="h3">Notifications</h2>

                <div className="table">
                    <div className="table__row">
                        <div className="table__cell">
                            <p className="table__cell-title"><strong>Project added or created</strong></p>

                            <p className="table__cell-text">Someone else creates or updates a project</p>
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Email</span>

                            <Switch enabled={true} />
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Web notification</span>

                            <Switch enabled={true} />
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell">
                            <p className="table__cell-title"><strong>Comment added</strong></p>

                            <p className="table__cell-text">Someone else adds a comment</p>
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Email</span>

                            <Switch enabled={true} />
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Web notification</span>

                            <Switch enabled={true} />
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell">
                            <p className="table__cell-title"><strong>Comment resolved</strong></p>

                            <p className="table__cell-text">Someone else resolves a comment</p>
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Email</span>

                            <Switch enabled={true} />
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Web notification</span>

                            <Switch enabled={true} />
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell">
                            <p className="table__cell-title"><strong>My actions</strong></p>

                            <p className="table__cell-text">When you do any of the actions above</p>
                        </div>

                        <div className="table__cell">
                            <span className="table__cell-title">Update me based on the notification preferences set above</span>

                            <Switch enabled={false} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
