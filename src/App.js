// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import AllEntries from './components/AllEntries';

// =================
// COMPONENT
// =================
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: 'all',
            entries: []
        }
        // method binding
        this.handleView = this.handleView.bind(this);
        this.fetchEntries = this.fetchEntries.bind(this);
        this.setEntries = this.setEntries.bind(this);
        this.handleCreateEntry = this.handleCreateEntry.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.removeFromArray = this.removeFromArray.bind(this);
    }

    // method to change views
    handleView(view) {
        this.setState( { currentView: view } )
    }

    // method to retreive data from API on load
    componentDidMount() {
        this.fetchEntries()
    }

    // API call
    fetchEntries() {
        fetch('https://openocean-backend.herokuapp.com/form/')
        .then(data => data.json())
        .then(jData => {
            console.log(jData)
            this.setEntries(jData)
        })
    }

    // method to set state
    setEntries(entries) {
        this.setState({
            entries: entries
        })
    }

    // method to create new entry
    handleCreateEntry (entry) {
        // console.log('this is handleCreateEntry', entry);
        fetch('https://openocean-backend.herokuapp.com/form/', {
            body: JSON.stringify(entry),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then (createdEntry => {
            return createdEntry.json()
        }).then( jData => {
            // not sure if we will use these two methods (depends on how many arrays we have)
            this.updateArray(jData, 'entries')
            // this.handleView()
        })
    }

    // method to update array
    updateArray(entry, array) {
        this.setState( prevState => {
            prevState[array].push(entry)
            return { [array]: prevState[array] }
        })
    }

    // method to delete entry
    handleDelete(entryId, arrayIndex) {
        fetch(`https://openocean-backend.herokuapp.com/form/${entryId}`, {
            method: 'DELETE'
        }).then(data => {
            // need to determine if the parameter currentArray is necessary
            this.removeFromArray('entries', arrayIndex)
        }).catch (error =>
        console.log("this is your error", error)
        )
    }

    // method to delete entry from array
    removeFromArray(array, arrayIndex) {
        this.setState( prevState => {
            prevState[array].splice(arrayIndex,1)
            return { [array]: prevState[array] }
        })
    }

    render() {
        return (
          <div className="App">
            <Header
            currentView={this.state.currentView}
            handleView={this.handleView}
            />
            <EntryForm
            handleCreateEntry={this.handleCreateEntry}
             />
            <AllEntries
            currentView={this.state.currentView}
            entries={this.state.entries}
            handleDelete={this.handleDelete}
            />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
