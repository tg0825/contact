import React from 'react'; // es6
import Contact from './Contact';
// var React = require('react'); // es5

class App extends React.Component {
    render() {
        return (
            <Contact/>
        );
    }
}

export default App;
// module.export = App; // es5
