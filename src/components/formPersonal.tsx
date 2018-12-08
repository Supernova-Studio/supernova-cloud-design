// Imports
import * as React from 'react'

import { Button } from './button'

type FormPersonalProps = {}

export class FormPersonal extends React.Component<FormPersonalProps, {}> {
    state = {
        inputName: '',
        inputNickname: '',
        inputEmail: '',
        inputPortfolioUrl: '',
        inputLocation: '',
        inputBio: ''
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
                    <label htmlFor="inputName">Name</label>

                    <input id="inputName" name="inputName" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputName} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputNickname">Nickname</label>

                    <input id="inputNickname" name="inputNickname" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputNickname} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputEmail">Email</label>

                    <input id="inputEmail" name="inputEmail" type="email" onChange={this.handleInputChange} defaultValue={this.state.inputEmail} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputPortfolioUrl">Portfolio URL</label>

                    <input id="inputPortfolioUrl" name="inputPortfolioUrl" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputPortfolioUrl} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputLocation">Location</label>

                    <input id="inputLocation" name="inputLocation" type="text" onChange={this.handleInputChange} defaultValue={this.state.inputLocation} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputBio">Bio</label>

                    <textarea name="inputBio" id="inputBio" onChange={this.handleInputChange} defaultValue={this.state.inputBio} />
                </fieldset>

                <fieldset>
                    <p className="form__note">By filling the fields, you're giving us consent to show your data wherever your user profile appears. For more information, refer to our <a className="link--blue" href="#">Privacy Policy</a>.</p>
                </fieldset>

                <fieldset>
                    <Button label="Update your profile" type="primary" />
                </fieldset>
            </form>
        )
    }
}
