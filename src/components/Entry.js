// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';


// =================
// COMPONENT
// =================
class Entry extends Component {
    render() {
        return (
            <div className='entry-container'>
                <div className='entry'>
                    <h2>{ this.props.entry.title }</h2>
                    <h3>{ this.props.entry.date }</h3>
                    <h3>{ this.props.entry.author }</h3>
                    <h3>{ this.props.entry.status }</h3>
                    <p>{ this.props.entry.text }</p>
                    <img src={ this.props.entry.image } />
                </div>

                <div className='entry-action'>
                    <button onClick={ () => this.props.handleDelete(this.props.entry.id, this.props.arrayIndex) }>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        );
    }
}

// ================
// EXPORT
// ================
export default Entry;
