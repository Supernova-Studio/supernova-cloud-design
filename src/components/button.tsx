// Imports
import * as React from 'react'

type ButtonProps = {
    disabled?: boolean;
    label: string;
    type: 'primary' | 'ghost';
}

export class Button extends React.PureComponent<ButtonProps, {}> {
    // Render the app
    render() {
        return (<button
            className={`btn ${this.props.type === 'primary' ? 'btn--primary' : 'btn--ghost'}`}
            disabled={this.props.disabled ? true : false}
        >
            {this.props.label}
        </button>)
    }
}
