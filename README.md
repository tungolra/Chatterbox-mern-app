# CHATTER[BOX]

### About the Project

This project was built in 7 days. Working within a team of 4, we organized our project by first creating a [wireframe](https://www.figma.com/file/sokWtK9ITMAuoRqUsckBqL/Daily-UI-013%2C-Direct-Messaging-(Community)?node-id=125%3A237&t=IMPmfOoZNcz5d72m-1), mapping an [ERD](https://lucid.app/lucidchart/a4f7bc41-de4d-4864-b5cb-280d8ba4388d/edit?viewport_loc=357%2C-530%2C939%2C1075%2C0_0&invitationId=inv_5697f7c8-49fa-4ec2-917e-00c9753884d3), and organizing our tasks for the minimum viable product (MVP) using (Notion)[https://www.notion.so/Project-4-116573c35df34573aec91b1e92c04118]. Following an Agile workflow, our team met daily during project week to touch base on task progress, issues faced, and mapping out next steps.   

From inception to deployment to Heroku, we built a MERN-stack instant messaging single page application (SPA), leveraging Socket.io to facilitate real-time communication between browsers. As a pseudo-social media application, we integrated AWS S3 for users to upload photos and coded functionality to edit their profile details. Chatterbox is featured as an instant messaging template that can be integrated and adapted across B2B, C2C, or B2C platforms.

### Responsibilities

As lead developer for this project, I was responsible for assigning tasks, managing GitHub pull requests, and ensuring we reach our MVP.

On the front-end, I leveraged AJAX calls to retrieve data from MongoDB and set up socket listeners/emitters to faciliate the bidirectional flow of data across browsers. 

I assisted with building a modern UI/UX platform, taking a mobile-first approach to build a responsive website for both desktop and mobile using a combination of CSS and Material UI styling frameworks. 

On the front-end, I used MVC architecture to build the Express backend, along with building socket routes to create real-time communication between the database and React frontend. Lastly, I created token-based authorization to validate user credentials.


### Log In/Sign Up Pages

<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/login.png">
<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/signup.png">

### Profile Page

### Update Profile Modal

<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/profileUpdate.png">

### Chatlist Component

### Chatbox Component

<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/Screen+Shot+2022-12-09+at+2.07.40+AM.png">

### Chat Member Modal

### Technologies Used

- [x] React
- [x] Express
- [x] React
- [x] Node
- [x] Mongoose database
- [x] Socket io
- [x] Amazon Web Services (aws-sdk)

### Next Steps 
- Create socket routes for real-time updates of updated user profiles. 
- socket routes for real-time updates of unread messages. 

### Icebox:

Going forward, some early stage icebox additions we have planned include:

1. Allowing users to only be able to see accepted 'friends' as users in their user list!
2. A search function to be able to find specific messages that were sent at a previous time.
3. A function that allows both users to see when either user is typing.
4. Notification indicators: 
    - Audio for when message is received
    - Indicators in chatlist component for unread messages 
5. Allowing for users to create group chats with other users. 

### Team Members

1. Ralph Tungol
2. Kendra Yoshizawa
3. Farnaz Towhidi
4. Tyler Ro

### Contact

Ralph Tungol
Email: rarttungol@gmail.com
Project Repo: [Repo]()
Project Site: [Site](https://chatterbox-sei-55.herokuapp.com/)
