// Imports
import * as React from 'react'

type CardActivityMemberProps = {
    avatarImageUrl: string;
    cardType: 'joined' | 'left';
    teamName: string;
    teamSize: string;
    time: string;
    username: string;
}

// Component
export class CardActivityMember extends React.Component<CardActivityMemberProps, {}> {
    render() {
        return <a className="card card--activity-member" href="#">
            <div className="card__header">
                <img src={this.props.avatarImageUrl} alt={this.props.username}/>
            </div>

            <div className="card__body">
                <h2 className="card__title">
                    <strong>{this.props.username}</strong> {this.props.cardType === 'joined' ? 'joined' : 'left'} {this.props.teamName} <span className="card--time">{this.props.time}</span>
                </h2>

                <h3 className="card__subtitle">{this.props.teamSize} people total on the team</h3>
            </div>
        </a>
    }
}
