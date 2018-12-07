// Imports
import * as React from 'react'

import { Button } from './button'

type FormBillingProps = {}

export class FormBilling extends React.Component<FormBillingProps, {}> {
    state = {
        inputAddress: '',
        inputExtraNotes: '',
        inputVatGstId: ''
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
                    <label htmlFor="inputVatGstId">VAT / GST ID</label>

                    <input id="inputVatGstId" name="inputVatGstId" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputVatGstId} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputAddress">Address</label>

                    <input id="inputAddress" name="inputAddress" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputAddress} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputExtraNotes">Extra notes, if needed</label>

                    <input id="inputExtraNotes" name="inputExtraNotes" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputExtraNotes} />
                </fieldset>

                <fieldset>
                    <Button label="Save billing information" type="primary" />
                </fieldset>
            </form>
        )
    }
}
