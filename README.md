# Open Ocean Blog
Built By Emma Shaffer and Lauren Mellon

## Description
This project is a full CRUD app with a React frontend and a separate Rails API server. Each of these repositories are hosted on Github and deployed on Heroku.  Since this was also a group project, teamwork was an important aspect as well.

## Technology Used
The front end of the application was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/).  The backend is built with Postgres, PSQL, Rails and Ruby.  The developer tools used were Github, Google, Slack, Zoom, and our text editors Atom and Sublime.

## Approach Taken
We drew out our application's architecture to determine the different components we would be creating.  This helped us think through the methods, props and State we would be establishing.  We were able to use this to visualize the flow of the data around/through the application. [React-Architecture-Blog.pdf](https://github.com/lmellon/OpenOceanFE/files/3276569/React-Architecture-Blog.pdf)
For our database, we created a table with columns to store our data.  These became the model in our Rails application.  We identified a possibility to add a second table to create a one to many relationship time permitting.
We pulled out ideas together in a brainstorming session that set us up to breakup the workload and establish a basic timeline for completion. [Unit 4 Project.pdf](https://github.com/lmellon/OpenOceanFE/files/3276552/Unit.4.Project.pdf)

## User Stories
We grouped our user stories into two categories.  One for the basic functionality and one for stretch stories.

Basic CRUD functionality
+ User can see all blog entries
+ User can create a blog entry
+ User can delete a blog entry
+ User can edit entry by changing the status( new to old, old to new )

Increased functionality
* User can change the view to see blog entries by status ( all, new, old )
* User can Like an entry

## Unsolved Problems
Due to some setbacks with deployment, we were unable to implement the second table, thus creating one to many relationships in our SQL database.

## Improvement Opportunities
* Increased Filtering capabilities
* Adding authenticity
* More models or tables

## See Application
Visit the blog [Open Ocean](https://afternoon-brook-47049.herokuapp.com/), or see the database [Open Ocean API](https://openocean-backend.herokuapp.com/form/).
