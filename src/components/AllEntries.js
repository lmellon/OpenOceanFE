// ================
// DEPENDENCIES
// ================
import React , { Component } from 'react';
import Entry from './Entry'


// =================
// COMPONENT
// =================
class AllEntries extends Component {
    render() {
        // console.log(this.props.entries);
        // console.log(this.props.currentView);
        return (
            <div className="all-entries">
                <div>{ this.props.entries.filter( (entry) => {
                    if (this.props.currentView === 'all') {
                        return true
                    } else {
                        return this.props.currentView === entry.status
                    }
                }).map((entry, index) => {
                return (
                    <Entry
                    key={index}
                    entry={entry}
                    arrayIndex={index}
                    handleDelete={this.props.handleDelete}
                    handleStatusChange={this.props.handleStatusChange}
                    />
                )
                })}
                </div>
            </div>
        );
    }
}

// ================
// EXPORT
// ================
export default AllEntries;
