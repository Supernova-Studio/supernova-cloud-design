// Imports
import * as React from 'react'

type CardActivityCommentsProps = {
    comments: any;
    numOfComments: number;
    nameOfProject: string;
    nameOfScreen: string;
    time: string;
}

// Component
export class CardActivityComments extends React.Component<CardActivityCommentsProps, {}> {
    renderComments = () => {
        let comments: any = []

        this.props.comments.map((comment, index) => {
            comments.push(<div key={`${Math.floor(Math.random() * 100)}_${index}`} className="activity-comments__comment">
                <div className="card__header">
                    <img className="card__avatar" src={comment[2]} alt={comment[0]} />
                </div>

                <div className="card__body">
                    <h3 className="card__title"><strong>{comment[0]}</strong> wrote:</h3>

                    <p className="activity-comments__text">{comment[1]}</p>
                </div>
            </div>)
        })

        return comments
    }

    render() {
        return <div className="card card--activity card--activity-comments">
            <div className="card__body">
                <h2 className="card__title">
                    <strong>{this.props.numOfComments} {this.props.numOfComments > 1 ? 'comments' : 'comment'}</strong> made on <a href="">{this.props.nameOfScreen}</a> in <a href="">{this.props.nameOfProject}</a>: <span className="card__time">{this.props.time}</span>
                </h2>

                <div className="activity-comments__comments">
                    {this.renderComments()}
                </div>
            </div>
        </div>
    }
}
