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
                <h1>Blog App</h1>
                    <h2>
                    { this.props.currentView === 'new' ? 'New Entries'
                    : this.props.currentView === 'old' ? 'Old Entries'
                    : 'All Entries'
                  }
                    </h2>
                    <ul className='nav-bar'>
                        <li onClick={ () => {this.props.handleView('all')} }>All</li>
                        <li onClick={ () => {this.props.handleView('newer')} }>New</li>
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

// {(() => {
//           switch(this.props.currentView) {
//             case 'new':
//               return <div>'New Entries'</div>
//             case 'old':
//               return <div> 'Old Entries'
//             case 'all':
//               return <div>
//             default:
//               return null
//           }
//         })()}