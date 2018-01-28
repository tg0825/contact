import React, {Component} from 'react';

export default class ContactCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(nextState);
    }

    handleCreate() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        })
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
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
                <button onClick={this.handleCreate}>Create</button>
            </div>
        )
    }
}
