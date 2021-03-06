import React from 'react'; // es6
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'a',
                phone: '1111'
            }, {
                name: 'b',
                phone: '2222'
            }, {
                name: 'c',
                phone: '3333'
            }, {
                name: 'd',
                phone: '4444'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $push: [contact]
                }
            )
        });
    }

    handleRemove() {
        if (this.state.selectedKey < 0) {
            return;
        }
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        })
    }

    handleEdit(name, phone) {
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: {
                            $set: name
                        },
                        phone: {
                            $set: phone
                        }
                    }
                }
            )
        });
    }


    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact)=> {
                    return contact.name.toLowerCase()
                        .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo
                        onClick={() => this.handleClick(i)}
                        contact={contact}
                        key={i}
                        />);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    type="text"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}
