// Imports
import * as React from 'react'

type FormOrgProps = {}

export class FormOrg extends React.Component<FormOrgProps, {}> {
    state = {
        inputOrgName: '',
        inputOwnerEmail: '',
        inputOrgUrl: '',
        inputDescription: ''
    }

    handleInputChange = (event) => {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    }

    // Render the app
    render() {
        return (
            <form className="form form--personal">
                <fieldset>
                    <label htmlFor="inputOrgName">Organization name</label>

                    <input id="inputOrgName" name="inputOrgName" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputOrgName} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputOwnerEmail">Owner email</label>

                    <input id="inputOwnerEmail" name="inputOwnerEmail" type="email" onChange={this.handleInputChange} defaultValue={this.state.inputOwnerEmail} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputOrgUrl">Organization URL</label>

                    <input id="inputOrgUrl" name="inputOrgUrl" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputOrgUrl} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputDescription">Description</label>

                    <textarea name="inputDescription" id="inputDescription" onChange={this.handleInputChange} defaultValue={this.state.inputDescription}></textarea>
                </fieldset>

                <fieldset>
                    <p className="form__note">By filling the fields, you're giving us consent to show your data wherever your user profile appears. For more information, refer to our <a className="link--blue" href="#">Privacy Policy</a>.</p>
                </fieldset>

                <fieldset>
                    <button className="btn btn--primary" onClick={this.handleFormSubmit}>Update organization profile</button>
                </fieldset>
            </form>
        )
    }
}
