// Imports
import * as React from 'react'

type ButtonProps = {
    clickHandler?: any;
    disabled?: boolean;
    hasSpinner?: boolean;
    label: string;
    type: 'primary' | 'ghost';
}

export class Button extends React.PureComponent<ButtonProps, {}> {
    // Render the app
    render() {
        return (<button
            className={`btn ${this.props.type === 'primary' ? 'btn--primary' : 'btn--ghost'}`}
            disabled={this.props.disabled ? true : false}
            onClick={this.props.clickHandler ? this.props.clickHandler : undefined}
        >
            {this.props.label} {this.props.hasSpinner ? <span className="btn-spinner" /> : null}
        </button>)
    }
}
