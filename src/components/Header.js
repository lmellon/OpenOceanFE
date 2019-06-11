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
        <div className=""> 
            <header>
               <ul className='nav-bar'>
                        <li onClick={ () => {this.props.handleView('all')} }>Home</li>
                        <li onClick={ () => {this.props.handleView('new')} }>Recent</li>
                        <li onClick={ () => {this.props.handleView('old')} }>Archive</li>
                        <li onClick={ () => {this.props.showForm()} }>New Entry</li>
                    </ul>
                    
                </header>
              </div>
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
