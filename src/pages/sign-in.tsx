// Imports
import * as React from 'react'
import Modal from 'react-modal'

import { Button } from 'src/components/button'

export class SignIn extends React.Component {
    state = {
        isSignInShown: true,
        isInvited: false
    }

    generateFormBody = () => {
        if (this.state.isSignInShown) {
            return (
                <div className="modal__body">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <fieldset>
                                <label htmlFor="inputEmail">Email</label>

                                <input id="inputEmail" name="inputEmail" type="email" />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="inputPassword">Password</label>

                                <input id="inputPassword" name="inputPassword" type="password" />
                            </fieldset>

                            <fieldset>
                                <a className="link--blue" href="#">Forgot Password?</a>
                            </fieldset>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="modal__body">
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <label htmlFor="inputFullName">Full name</label>

                                <input id="inputFullName" name="inputFullName" type="text" />
                            </fieldset>
                        </div>

                        <div className="col-md-6">
                            <fieldset>
                                <label htmlFor="inputOwnerEmail">Company Name (optional)</label>

                                <input id="inputOwnerEmail" name="inputOwnerEmail" type="text" />
                            </fieldset>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <label htmlFor="inputEmail">Email</label>

                                <input id="inputEmail" name="inputEmail" type="email" />
                            </fieldset>
                        </div>

                        <div className="col-md-6">
                            <fieldset>
                                <label htmlFor="inputPassword">Password</label>

                                <input id="inputPassword" name="inputPassword" type="password" />
                            </fieldset>
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleSignInChange = () => {
        this.setState({
            isSignInShown: !this.state.isSignInShown
        })
    }

    handleInviteChange = () => {
        this.setState({
            isInvited: !this.state.isInvited
        })
    }

    render() {
        return(
            <div className="page--sign-in">
                <div className="page__body">
                    <Modal
                        bodyOpenClassName="modal-sign-in-open"
                        className="modal__content"
                        contentLabel="Invite"
                        isOpen={true}
                        overlayClassName="modal__overlay"
                        portalClassName="modal__portal"
                        shouldCloseOnOverlayClick={false}
                    >
                        <div className="modal__header">
                            {this.state.isSignInShown ? (
                                    <React.Fragment>
                                        Already have an account? <a onClick={this.handleSignInChange} href="#">Sign In</a>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        Don’t have an account? <a onClick={this.handleSignInChange} href="#">Sign Up</a>
                                    </React.Fragment>
                                )
                            }
                        </div>

                        {this.generateFormBody()}

                        <div className="modal__body">
                            <div className="modal__sign-buttons row">
                                <div className="col-md-9">
                                    <Button label={this.state.isSignInShown ? 'Sign in' : 'Sign up'} type="primary" />
                                </div>

                                <div className="col-md-9">
                                    <ul className="list--unstyled">
                                        <li>
                                            <hr className="divider" />
                                        </li>

                                        <li>or continue with</li>

                                        <li>
                                            <hr className="divider" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-9">
                                    <Button label={this.state.isSignInShown ? 'Sign in' : 'Sign up'} type="primary" />
                                </div>
                            </div>
                        </div>

                        <div className="modal__footer">
                            <p className="form__note text--gray">By signing up, you agree with our <a className="link--blue" href="#">Terms and Conditions</a>.</p>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

