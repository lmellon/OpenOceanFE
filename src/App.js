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
            entries: [],
            seeForm: false
        }
        // method binding
        this.handleView = this.handleView.bind(this);
        this.fetchEntries = this.fetchEntries.bind(this);
        this.setEntries = this.setEntries.bind(this);
        this.handleCreateEntry = this.handleCreateEntry.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.removeFromArray = this.removeFromArray.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.showForm = this.showForm.bind(this);
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

    // method to show or hide form
    showForm() {
        this.setState( { seeForm: !this.state.seeForm })
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
            this.showForm()
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

    // method to change status of entry (new or old)
    handleStatusChange(entry, entryId) {
        console.log(entry);
        if (entry.status === 'new') {
            entry.status = 'old'
        } else {
            entry.status = 'new'
        }
        fetch(`https://openocean-backend.herokuapp.com/form/${entry.id}`, {
            body: JSON.stringify(entry),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then (updatedEntry => updatedEntry.json())
        .then(jData => {
            console.log(jData)
            this.handleView('new')
        }).catch(err => console.log('this is the error from handleStatusChange', err))
    }

  //   handleEdit(array, arrayIndex){
  //  if(this.state.editable){
  //     let name = this.name.value
  //     let description = this.description.value
  //     let id = this.props.fruit.id
  //     let fruit = {id: id, name: name, description: description}
  //     this.props.handleUpdate(fruit)
  //   }
  //   this.setState({
  //     editable: !this.state.editable
  //   })
  // }



    render() {
        return (
          <div className="App">
            <Header
            currentView={this.state.currentView}
            handleView={this.handleView}
            seeForm={this.state.seeForm}
            showForm={this.showForm}
            />
            <EntryForm
            handleCreateEntry={this.handleCreateEntry}
            seeForm={this.state.seeForm}
             />
            <AllEntries
            currentView={this.state.currentView}
            entries={this.state.entries}
            handleDelete={this.handleDelete}
            handleStatusChange={this.handleStatusChange}
            />

          </div>
        );
    }
}

// ================
// EXPORT
// ================
export default App;
