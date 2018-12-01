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
                <h3 className="card__subtitle"><strong>{comment[0]}</strong> wrote:</h3>

                <p className="activity-comments__text">{comment[1]}</p>
            </div>)
        })

        return comments
    }

    render() {
        return <a className="card card--activity card--activity card--activity-comments" href="#">
            <div className="card__body">
                <h2 className="card__title">
                    <strong>{this.props.numOfComments} {this.props.numOfComments > 1 ? 'comments' : 'comment'}</strong> made on {this.props.nameOfScreen} in {this.props.nameOfProject}
                </h2>

                <div className="activity-comments__comments">
                    {this.renderComments()}
                </div>
            </div>
        </a>
    }
}
