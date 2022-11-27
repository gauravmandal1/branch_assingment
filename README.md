# this is backend of CS Messaging Web App 

to install :
npm/yarn 

npm/yarn server

once it shows working on port we can make api call to api endpoint .

api/user to get and post new user and login 

api/chat to get chatroom 

api/chat/group to createchat this is protected so we will need to send auth token to make api call 

api/message/:chatID will return all message of that room 

api/message to send message POST with content and chatID in body
