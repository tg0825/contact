import React from 'react'; // es6
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
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
                return (<ContactInfo contact={contact} key={i}/>);
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
            </div>
        )
    }
}
