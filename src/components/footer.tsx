// Imports
import * as React from 'react'

// Dashboard header implementation
export class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="footer">
              <div className="container">
                <div className="row">
                    <div className="col-lg-3 footer__copy">
                        <img className="footer__logo" src={require('../images/supernova-logo-black.svg')} alt="Supernova" />

                        <p>&copy; 2019 Supernova, Inc.</p>
                    </div>

                    <div className="col-lg-9">
                        <ul className="footer__nav">
                            <li>
                                <a className="link--blue" href="#!">Privacy</a>
                            </li>

                            <li>
                                <a className="link--blue" href="#!">Terms</a>
                            </li>

                            <li>
                                <a className="link--blue" href="#!">Security</a>
                            </li>

                            <li>
                                <a className="link--blue" href="#!">Status</a>
                            </li>

                            <li className="line-break" />

                            <li>
                                <a className="link--blue" href="#!">Contact us</a>
                            </li>

                            <li>
                                <a className="link--blue" href="#!">Pricing</a>
                            </li>

                            <li>
                                <a className="link--blue" href="#!">Blog</a>
                            </li>

                            <li><a className="link--blue" href="#!">About</a></li>
                        </ul>
                    </div>
                </div>
              </div>
            </footer>
        )
    }
}
