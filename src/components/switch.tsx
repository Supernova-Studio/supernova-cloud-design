// Imports
import * as React from 'react'

type SwitchProps = {
    enabled: boolean;
}

export class Switch extends React.PureComponent<SwitchProps, {}> {
    state = {
        isEnabled: this.props.enabled
    }

    handleSwitchClick = () => {
        this.setState({
            isEnabled: !this.state.isEnabled
        })
    }

    // Render the app
    render() {
        return (<div className={`switch ${this.state.isEnabled ? 'switch--active' : 'switch--inactive'}`} onClick={this.handleSwitchClick}>
            <div className="switch__thumb"></div>
        </div>)
    }
}
