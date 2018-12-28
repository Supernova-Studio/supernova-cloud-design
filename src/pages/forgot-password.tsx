// Imports
import * as React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { Button } from 'src/components/button'

export class ForgotPassword extends React.Component {
    state = {
        hasError: false,
        isLinkSend: false
    }

    generateFormBody = () => {
        if (this.state.isLinkSend) {
            return (
                <div className="modal__body pt-0 pb-2 text--center">
                    <p className="mb-0">We sent a reset link to the email you provided. It should arrive shortly. Follow the instructions in the email to reset your password.</p>

                    <p className="mt-1 mb-1">If you did not receive an email, please check your spam folder.</p>

                    <p className="mb-0">If you still don’t see an email, <a href="#" className="link--blue text--bold">try again</a>.</p>
                </div>
            )
        } else {
            return (
                <div className="modal__body pt-0 pb-2">
                    <p className="text--center">Happens to all of us.</p>

                    <p className="mt-1 mb-1 text--center">Enter your email and we’ll send you a link to change it :)</p>

                    <div className="row justify-content-center mb-2">
                        <div className="col-md-10">
                            <fieldset>
                                <label htmlFor="inputEmail">Email</label>

                                <input id="inputEmail" name="inputEmail" type="email" />

                                {this.state.hasError && <p className="form__error">That email doesn’t exists on our server. Please try another one.</p>}
                            </fieldset>

                            <fieldset className="mt-2 text--center">
                                <Button label="Send link" type="primary" isFullWidth={true} />
                            </fieldset>
                        </div>
                    </div>
                </div>
            )
        }
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
                            <span>Know your password?</span> <Link className="link--blue" to="/sign-in">Sign In</Link>
                        </div>

                        <div className="modal__body text--center">
                            <span className="icon icon--cloud-outline" style={{width: '46px', height: '30px'}} />

                            <h3 className="h4 text--bold mt-2 mb-0">{this.state.isLinkSend ? 'Link sent!' : 'Forgot password?'}</h3>
                        </div>

                        {this.generateFormBody()}
                    </Modal>
                </div>
            </div>
        )
    }
}

