// Imports
import * as React from 'react'

type CardActivityProjectProps = {
    avatarImageUrl: string;
    cardType: 'created' | 'updated';
    numOfScreens: number;
    projectName: string;
    projectThumbnail: string;
    projectThumbnailAlt?: string;
    screensAdded: number;
    screensRemoved: number;
    screensUpdated: number;
    time: string;
    username: string;
}

// Component
export class CardActivityProject extends React.Component<CardActivityProjectProps, {}> {
    render() {
        return <div className="card card--activity card--activity-project">
            <div className="card__header">
                <img className="card__avatar" src={this.props.avatarImageUrl} alt={this.props.username}/>
            </div>

            <div className="card__body">
                <h2 className="card__title">
                    <strong>{this.props.username}</strong>
                    {this.props.cardType === 'created' ? ' created a new project' : ' updated project'}: <a href="">{this.props.projectName}</a> <span className="card__time">{this.props.time}</span>
                </h2>

                {this.props.cardType === 'created' ? (
                    <h3 className="card__subtitle">
                        Created as mobile project with {this.props.numOfScreens} {this.props.numOfScreens > 1 ? 'screens' : 'screen'}.
                    </h3>
                ) : (
                    <h3 className="card__subtitle">
                        {this.props.screensAdded} {this.props.screensAdded > 1 ? 'screens' : 'screen'} added,{' '}
                        {this.props.screensRemoved} {this.props.screensRemoved > 1 ? 'screens' : 'screen'} removed,{' '}
                        {this.props.screensUpdated} {this.props.screensUpdated > 1 ? 'screens' : 'screen'} updated.
                    </h3>
                )}

                <img className="card__thumbnail" src={this.props.projectThumbnail} alt={this.props.projectThumbnailAlt} />
            </div>
        </div>
    }
}
