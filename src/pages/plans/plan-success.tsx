// Imports
import * as React from 'react'

type PlanSuccessProps = {}

export class PlanSuccess extends React.PureComponent<PlanSuccessProps, {}> {
    // Render the app
    render() {
        return (
            <div className="page page--plan-success">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Personal Plans</h1>
                    </div>
                </div>

                <div className="page__body">
                    <div className="container">
                        <div className="page__content">
                            <h2 className="h3">All set! Time to build pixel-perfect apps with Supernova!</h2>

                            <p className="form__note mt-1">Your account has been successfully upgraded to <strong>Ultimate</strong>.</p>

                            <p className="form__note mb-0">Here are some resources that will help you master Supernova in no time. Or <a className="link--blue" href="#">return to Cloud</a>.</p>

                            <div className="row mt-2 success__boxes">
                                <a className="col-md-6 col-lg-3 success__box" href="#">
                                    <span className="success__box-icon icon icon--download" />

                                    <div className="success__box-heading">Download Studio</div>

                                    <div className="success__box-slug">Start using the Studio and empower your prototyping and hand-off game.</div>
                                </a>

                                <a className="col-md-6 col-lg-3 success__box" href="#">
                                    <span className="success__box-icon icon icon--education" />

                                    <div className="success__box-heading">Master Supernova</div>

                                    <div className="success__box-slug">Learn everything there is about Supernova, on real-life examples.</div>
                                </a>

                                <a className="col-md-6 col-lg-3 success__box" href="#">
                                    <span className="success__box-icon icon icon--hashtag" />

                                    <div className="success__box-heading">Join Community</div>

                                    <div className="success__box-slug">Our Community is one of a kind {'<3'} Join us and be first to know the news!</div>
                                </a>

                                <a className="col-md-6 col-lg-3 success__box" href="#">
                                    <span className="success__box-icon icon icon--book" />

                                    <div className="success__box-heading">Read Documentation</div>

                                    <div className="success__box-slug">Been through all the tutorials? Documentation dives even deeper.</div>
                                </a>
                            </div>

                            <h3 className="h3 mt-4">Purchase summary</h3>

                            <p className="form__note mt-2">Your order is processing. You can expect to receive a receipt and delivery information via email within the next few minutes.</p>

                            <p className="form__note mb-2">If you don't receive receipt within the next 30 minutes, please check your spam folder or your filter settings. You can also generate a customized invoice <a className="link--blue" href="">here</a>.</p>

                            <ul className="list--summary">
                                <li>
                                    <strong className="list__title">Plan:</strong>

                                    <span className="list__data">Supernova Studio Ultimate</span>
                                </li>

                                <li>
                                    <strong className="list__title">Billed:</strong>

                                    <span className="list__data">{String.fromCharCode(36)}28 / month</span>
                                </li>

                                <li>
                                    <strong className="list__title">Billed Date:</strong>

                                    <span className="list__data">07/18/2018</span>
                                </li>

                                <li>
                                    <strong className="list__title">Next Payment:</strong>

                                    <span className="list__data">{String.fromCharCode(36)}28 on 11/12/2018</span>
                                </li>
                            </ul>

                            <p className="form__note mt-2">From the entire team of Supernova, we thank you for believing in us. <strong>You are what drives us forward.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
