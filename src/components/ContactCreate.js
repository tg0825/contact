import React, {Component} from 'react';

export default class ContactCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });

        this.nameInput.focus();
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                        ref={(ref) => {this.nameInput = ref}}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}
