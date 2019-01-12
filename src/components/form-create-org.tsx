// Imports
import * as React from 'react'

import { Button } from './button'

type FormCreateOrgProps = {}

export class FormCreateOrg extends React.Component<FormCreateOrgProps, {}> {
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
            <form className="form">
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

                                <div className="col-md-6 mt-md-down-1">
                                    <input id="inputExpirationDateYear" name="inputExpirationDateYear" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputExpirationDateYear} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 mt-md-down-2">
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

                    <div className="col-md-4 mt-md-down-2">
                        <fieldset>
                            <label htmlFor="inputZip">ZIP</label>

                            <input id="inputZip" name="inputZip" type="number" onChange={this.handleInputChange} defaultValue={this.state.inputZip} />
                        </fieldset>
                    </div>
                </div>

                <fieldset>
                    <div className="table table--default">
                        <div className="table__row">
                            <div className="table__cell flex-row">
                                <strong>Pay Yearly and save $840</strong>&nbsp;&nbsp;<a href="#" className="link--blue text--bold">Switch to yearly</a>
                            </div>
                        </div>

                        <div className="table__row">
                            <div className="table__cell text--bold">Billing interval</div>

                            <div className="table__cell text--bold">Monthly</div>
                        </div>

                        <div className="table__row">
                            <div className="table__cell text--bold">Number of seats</div>

                            <div className="table__cell text--bold">3 total, 2 paid</div>
                        </div>

                        <hr className="divider mt-2 mb-2" />

                        <div className="table__row">
                            <div className="table__cell">Billed now</div>

                            <div className="table__cell">
                                <strong>{String.fromCharCode(36)}240</strong>
                            </div>
                        </div>

                        <hr className="divider mt-2 mb-2" />
                    </div>
                </fieldset>

                <fieldset className="mt-lg-down-1">
                    <div className="row d-flex flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 text-lg-down-center">
                            <p className="mb-0 d-flex justify-content-center justify-content-lg-start mb-lg-down-1 text--small text--blue-light"><span className="icon icon--lock" style={{marginRight: '8px', width: '11px', height: '16px'}} /> Secure credit card payment</p>

                            <p className="mb-0 text--small text--gray">Secured using 128-bit SSL encrypted channel</p>
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end mb-md-down-2 mt-lg-down-1 mb-lg-down-1">
                            <Button label="Create organization & Start Inviting" type="primary" disabled={false} />
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}
