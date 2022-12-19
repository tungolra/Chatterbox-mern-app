# CHATTER[BOX]

### About the Project

This project was built in 7 days. Working within a team of 4, we organized our project by first creating a [wireframe](https://www.figma.com/file/sokWtK9ITMAuoRqUsckBqL/Daily-UI-013%2C-Direct-Messaging-(Community)?node-id=125%3A237&t=IMPmfOoZNcz5d72m-1), mapping an [ERD](https://lucid.app/lucidchart/a4f7bc41-de4d-4864-b5cb-280d8ba4388d/edit?viewport_loc=357%2C-530%2C939%2C1075%2C0_0&invitationId=inv_5697f7c8-49fa-4ec2-917e-00c9753884d3), and organizing our tasks for the minimum viable product (MVP) using (Notion)[https://www.notion.so/Project-4-116573c35df34573aec91b1e92c04118]. Following an Agile workflow, our team met daily during project week to touch base on task progress, issues faced, and mapping out next steps.   

From inception to deployment to Heroku, we built a MERN-stack instant messaging single page application (SPA), leveraging Socket.io to facilitate real-time communication between browsers. As a pseudo-social media application, we integrated AWS S3 for users to upload photos and coded functionality to edit their profile details. Chatterbox is featured as an instant messaging template that can be integrated and adapted across B2B, C2C, or B2C platforms.

### Responsibilities

As lead developer for this project, I was responsible for assigning tasks, managing GitHub pull requests, and ensuring we reach our MVP.

On the front-end, I leveraged AJAX calls to retrieve data from MongoDB and set up socket listeners/emitters to faciliate the bidirectional flow of data across browsers. 

I assisted with building a modern UI/UX platform, taking a mobile-first approach to build a responsive website for both desktop and mobile using a combination of CSS and Material UI styling frameworks. 

On the front-end, I used MVC architecture to build the Express backend, along with building socket routes to create real-time communication between the database and React frontend. Lastly, I created token-based authorization to validate user credentials.


### Chat Page

The core feature for this application is the chat page. It aims to resemble modern instant messaging interfaces where it features on the left-hand side a Chat List section showing all available chats. Users can see when another user is online indicated by the green border around the profile badge of each user. The nav bar allows them to reach their profile settings, to update their profile info within the same page, or to be redirected to the Chat Page if they are not currently within it. Lastly, users can click the Logout icon to remove their token from local storage and effectively logout. 

Upon opening a chat, a scroll feature will pull the chatbox to the portion of the page where the last message was sent. For seamless UX, a chat member modal above the chatbox indicates the conversation they are in as well as making their selected conversation highlighted. Further, users can see who sent the message within each chat bubble. Lastly, within each message, a timestamp is included to show when a message has been received.

<img src="https://i.imgur.com/tn2KTog.gif">

### Chat Member Modal

Here, users can view the profile details of the corresponding chat member they are speaking with. 
<img src="https://i.imgur.com/aXjkvsn.png">

### Profile Page

As a pseudo-social media application, we give users the option to update their profile settings. They can change their first and last name, their username, their profile picture, as well as their bio (see Update Profile Modal next)

<img src="https://i.imgur.com/Y0UKqRK.png">

#### Update Profile Modal

<img src="https://i.imgur.com/GMz55U4.png">

### Authorization Pages

Using token-based authorization, users can create a new account by adding in their credentials or log in to their account with their existing credentials. 

#### Log In Page

<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/login.png">

#### Sign Up Page

<img src="https://ga-chatterbox.s3.ca-central-1.amazonaws.com/signup.png">

### Technologies Used

- [x] MongoDB
- [x] Express
- [x] React
- [x] Node.js
- [x] Mongoose 
- [x] Socket.io
- [x] AWS S3
- [x] AJAX
- [x] CSS/Material UI
- [x] HTML/JSX

 
### Next Steps 
- Users see the last message they have sent or received in each active conversation. 
- Only upon page refresh, the mailing icon will change to indicate if they have unread messages.
    - socket routes for real-time updates of unread messages. 
- In the Chat List component, users will be able to search for other users to begin conversations with. For now, they can select the dropdown to find all users they do not currently have an active chat with to begin a new conversation. 
- In the Chatbox component (right-hand side), users will have the option to search for messages within a particular chat. 
- Create socket routes for real-time updates of updated user profiles. 

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
