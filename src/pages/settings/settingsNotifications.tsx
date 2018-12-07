// Imports
import * as React from 'react'

import { Button } from 'src/components/button'
import { Switch } from 'src/components/switch'

type SettingsNotificationsProps = {}

export class SettingsNotifications extends React.PureComponent<SettingsNotificationsProps, {}> {
    // Render the app
    render() {
        return (
            <div className="settings__content settings__content--vertical">
                <h2 className="h3">Notifications</h2>

                <div className="table">
                    <div className="table__row">
                        <div className="table__cell col-md-7">
                            <p className="table__cell-title">Project added or created</p>

                            <p className="table__cell-text">Someone else creates or updates a project</p>
                        </div>

                        <div className="table__cell col-md-2">
                            <span className="table__cell-title">Email &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>

                        <div className="table__cell col-md-3">
                            <span className="table__cell-title">Web notification &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-7">
                            <p className="table__cell-title">Comment added</p>

                            <p className="table__cell-text">Someone else adds a comment</p>
                        </div>

                        <div className="table__cell col-md-2">
                            <span className="table__cell-title">Email &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>

                        <div className="table__cell col-md-3">
                            <span className="table__cell-title">Web notification &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-7">
                            <p className="table__cell-title">Comment resolved</p>

                            <p className="table__cell-text">Someone else resolves a comment</p>
                        </div>

                        <div className="table__cell col-md-2">
                            <span className="table__cell-title">Email &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>

                        <div className="table__cell col-md-3">
                            <span className="table__cell-title">Web notification &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">My actions</p>

                            <p className="table__cell-text">When you do any of the actions above</p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Update me based on the notification preferences set above &nbsp;&nbsp;<Switch enabled={false} /></span>
                        </div>
                    </div>
                </div>

                <h2 className="h3 mt-4">Subscriptions</h2>

                <div className="table">
                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">Automatic subscription to personal projects</p>

                            <p className="table__cell-text">When a project is created in a personal workspace </p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Automatically subscribe &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">Automatic subscription to projects within organization</p>

                            <p className="table__cell-text">When a project is created within the organizations you are a member of </p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Automatically subscribe &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>
                </div>

                <h2 className="h3 mt-4">Projects</h2>

                <p className="form__note mb-2">Select which projects you want to observe. These settings can be changed at any time and applies to any future events.</p>

                <div className="table table--gray">
                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">Project 1</p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Send notifications &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">Project 2</p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Send notifications &nbsp;&nbsp;<Switch enabled={false} /></span>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-6">
                            <p className="table__cell-title">Project 3</p>
                        </div>

                        <div className="table__cell col-md-6">
                            <span className="table__cell-title">Send notifications &nbsp;&nbsp;<Switch enabled={true} /></span>
                        </div>
                    </div>
                </div>

                <h2 className="h3 mt-4">Web Notifications</h2>

                <p className="form__note mb-2">Select which projects you want to observe. These settings can be changed at any time and applies to any future events.</p>

                <Button label="Enable web notifications" type="primary" />
            </div>
        )
    }
}
