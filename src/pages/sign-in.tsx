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

                                <div className="text--right">
                                    <a className="form__forgot link--blue" href="#">Forgot Password?</a>
                                </div>
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

                    <div className="row mt-2">
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

                                <div className="text--right">
                                    <a className="form__forgot link--blue" href="#">Forgot Password?</a>
                                </div>
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
                        className="modal modal--sign-in"
                        contentLabel="Invite"
                        isOpen={true}
                        overlayClassName="modal__overlay"
                        portalClassName="modal__portal"
                        shouldCloseOnOverlayClick={false}
                    >
                        <div className="modal__header">
                            {!this.state.isSignInShown ? (
                                    <React.Fragment>
                                        <span>Already have an account?</span> <a className="link--blue" onClick={this.handleSignInChange} href="#">Sign In</a>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <span>Don’t have an account?</span> <a className="link--blue" onClick={this.handleSignInChange} href="#">Sign Up</a>
                                    </React.Fragment>
                                )
                            }
                        </div>

                        <div className="modal__body text--center">
                            <span className="icon icon--cloud-outline" style={{width: '46px', height: '30px'}} />

                            {this.state.isInvited ? (
                                    <h3 className="h4 text--bold mt-2 mb-1">You’ve been invited to “Spacebook”</h3>
                                ) : (
                                    <h3 className="h4 text--bold mt-2 mb-1">{this.state.isSignInShown ? 'Welcome back! Nice to see you.' : 'Sign up for Supernova Cloud'}</h3>
                                )
                            }

                            {this.state.isSignInShown ? <h4 className="h6">Sign in to Supernova Cloud</h4> : <h4 className="h6">Free. Forever.</h4>}
                        </div>

                        {this.generateFormBody()}

                        <div className="modal__body">
                            <div className="modal__sign-buttons row">
                                <div className="col-md-9">
                                    <Button label={this.state.isSignInShown ? 'Sign in' : 'Sign up'} type="primary" />
                                </div>

                                <div className="col-md-9 mt-2 mb-2 modal__divider-wrapper">
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
                                    <button className="btn btn--primary btn--google" ><img src={require('../images/icons/icon-google.svg')} /> {this.state.isSignInShown ? 'Sign in with Google' : 'Sign up with Google'}</button>
                                </div>
                            </div>
                        </div>

                        <div className="modal__footer">
                            {!this.state.isSignInShown ? (
                                    <p className="text--gray">By signing up, you agree with our <a className="link--blue" href="#">Terms and Conditions</a>.</p>
                                ) : (
                                    <p className="d-flex justify-content-center text--gray"><span className="icon icon--lock" style={{marginRight: '8px', width: '11px', height: '16px'}} /> All your information is AES-256 encrypted.</p>
                                )
                            }
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

