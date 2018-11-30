// Imports
import * as React from 'react'

type DropdownProps = {
    align: 'centered' | 'left' | 'right',
    handleDropdownClick: Function,
    hasDividers: boolean,
    isDropdownOpen: boolean,
    items: Array<any>,
    label: any,
    onItemClick?: Function
}

// Component
export class Dropdown extends React.Component<DropdownProps, {}> {

    // Properties
    state = {
        dropDownId: '',
        isDropdownOpen: this.props.isDropdownOpen
    }

    componentDidMount () {
        // Generate unique id for every instance of dropdown
        // ID is then used for generating dropdown items via map().
        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        let id = 'Drp'

        for (let i = 0; i < 8; i++) {
            id += chars[Math.floor(Math.random() * chars.length)]
        }

        this.setState({
            dropDownId: id
        })
    }

    // Close dropdown when isDropdownOpen prop changes
    static getDerivedStateFromProps(nextProps: any) {
        if ('isDropdownOpen' in nextProps) {
            return {
                isDropdownOpen: nextProps.isDropdownOpen
            }
        }

        return null
    }

    // Backup method to handle dropdown click, working with componentWillReceiveProps()
    handleDropdownClick = (event)  => {
        event.preventDefault()

        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        })
    }

    // Render the app
    render() {
        return <div className="dropdown__container">
            <button className="dropdown__toggler" onClick={this.props.handleDropdownClick ? () => this.props.handleDropdownClick(event) : () => this.handleDropdownClick(event)}>{this.props.label}</button>

            <ul className={`dropdown__list ${this.props.hasDividers && 'dropdown--has-dividers'} dropdown__list--${this.props.align} ${this.state.isDropdownOpen && ' dropdown__list--visible'}`}>
                {this.props.items.map((item, index) => {
                    return (<li key={`${this.state.dropDownId}_${index}`} className="dropdown__item">
                        <a className="dropdown__link">{item}</a>
                    </li>)
                })}
            </ul>
        </div>
    }
}
