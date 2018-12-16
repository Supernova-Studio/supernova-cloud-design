// Imports
import * as React from 'react'

import { Button } from './button'

type FormPaymentProps = {}

export class FormPayment extends React.Component<FormPaymentProps, {}> {
    state = {
        inputCardCCV: '',
        inputCardNumber: '',
        inputExpirationDateMonth: '',
        inputExpirationDateYear: '',
        inputLocation: '',
        inputName: '',
        inputZip: ''
    }

    handleInputChange = (event) => {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Render the app
    render() {
        return (
            <form className="form form--personal">
                <fieldset>
                    <label htmlFor="inputName">Name on card</label>

                    <input id="inputName" name="inputName" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputName} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputCardNumber">Card number</label>

                    <input id="inputCardNumber" name="inputCardNumber" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputCardNumber} />
                </fieldset>

                <fieldset>
                    <div className="row">
                        <div className="col-md-7">
                            <label htmlFor="inputExpirationDateMonth">Expiration date</label>

                            <div className="row">
                                <div className="col-md-6">
                                    <input id="inputExpirationDateMonth" name="inputExpirationDateMonth" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputExpirationDateMonth} />
                                </div>

                                <div className="col-md-6">
                                    <input id="inputExpirationDateYear" name="inputExpirationDateYear" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputExpirationDateYear} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="inputCardCCV">CVC / CVV</label>

                            <input id="inputCardCCV" name="inputCardCCV" type="number" onChange={this.handleInputChange} defaultValue={this.state.inputCardCCV} />
                        </div>
                    </div>
                </fieldset>

                <div className="row">
                    <div className="col-md-8">
                        <fieldset>
                            <label htmlFor="inputLocation">Country</label>

                            <select id="inputLocation" name="inputLocation" onChange={this.handleInputChange} defaultValue={this.state.inputLocation}>
                                <option value="United States">United States</option>
                                <option value="Czechia">Czechia</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className="col-md-4">
                        <fieldset>
                            <label htmlFor="inputZip">ZIP</label>

                            <input id="inputZip" name="inputZip" type="number" onChange={this.handleInputChange} defaultValue={this.state.inputZip} />
                        </fieldset>
                    </div>
                </div>

                <fieldset>
                    <div className="table table--default">
                        <div className="table__row">
                            <div className="table__cell">Upgrading to</div>

                            <div className="table__cell">
                                <strong>Supernova Ultimate</strong>
                            </div>
                        </div>

                        <div className="table__row">
                            <div className="table__cell">Billed now</div>

                            <div className="table__cell">
                                <strong>{String.fromCharCode(36)}240</strong>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="row">
                        <div className="col-md-9">
                            <p className="mb-0 d-flex text--small text--blue-light"><span className="icon icon--lock" style={{marginRight: '8px', width: '11px', height: '16px'}} /> Secure credit card payment</p>

                            <p className="mb-0 text--small text--gray">Secured using 128-bit SSL encrypted channel</p>
                        </div>

                        <div className="col-md-3">
                            <Button label="Upgrade to Ultimate" type="primary" disabled={true} />
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}
