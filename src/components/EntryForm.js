// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';


// =================
// COMPONENT
// =================
class EntryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            title: '',
            text: '',
            image: '',
            author: '',
            status: 'new'
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change - takes input and gives it to state
    handleChange = (event) => {
        this.setState( {[event.target.id]: event.target.value} )
        // console.log('this is the event', event.target.value);
    }

    // receives info from user input and sends it back up to App
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log('this is state',this.state);
        this.props.handleCreateEntry(this.state)
        this.clearForm()
    }

    // clear form after submit
    clearForm = () => {
        this.setState ({
            date: '',
            title: '',
            text: '',
            image: '',
            author: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Create New Entry</legend>
                    <label htmlFor='date'>Date</label>
                    <input type='date' onChange={this.handleChange} value={this.state.date} id='date'/>
                    <label htmlFor='author'>Author</label>
                    <input type='text' onChange={this.handleChange} value={this.state.author} id='author'/>
                    <label htmlFor='title'>Title</label>
                    <input type='text' onChange={this.handleChange} value={this.state.title} id='title'/>
                    <label htmlFor='text'>Text</label>
                    <textarea onChange={this.handleChange} value={this.state.text} id='text'></textarea>
                    <label htmlFor='image'>Image URL</label>
                    <input type='text' onChange={this.handleChange} value={this.state.image} id='image'/>
                    <input type='submit' value='Post Entry'/>
                </fieldset>
            </form>
        );
    }
}

// ================
// EXPORT
// ================
export default EntryForm;
