import React, {Component} from 'react';

export default class ContactDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        // isEdit false
        } else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );


        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;

        const blank = (<div>Not Selected</div>);

        let msg = '';

        if (this.props.isSelected) {
            msg = (
                <div>
                    {this.props.contact.name}
                </div>
            );
        }

        return (
            <div>
                <h2>contact details</h2>
                {this.props.isSelected ? view : blank }
                <button onClick={this.handleToggle}>
                    {this.state.isEdit ? 'ok' : 'edit'}
                </button>
                <button onClick={this.props.onRemove}>remove</button>
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onEdit: () => {console.log('onEdit not defined');}
}
