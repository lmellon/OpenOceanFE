// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';


// =================
// COMPONENT
// =================
class Header extends Component {
    render() {
        return (
            <header>
                <h1>Open Ocean Blogging</h1>
                    <ul className='nav-bar'>
                        <em>Filter Entries</em>
                        <li onClick={ () => {this.props.handleView('all')} }>All</li>
                        <li onClick={ () => {this.props.handleView('new')} }>New</li>
                        <li onClick={ () => {this.props.handleView('old')} }>Old</li>
                    </ul>
            </header>
        );
    }
}

// ================
// EXPORT
// ================
export default Header;
//
// <h2>
// { this.props.currentView === 'new' ? 'New Entries'
// : this.props.currentView === 'old' ? 'Old Entries'
// : 'All Entries'
// }
// </h2>
