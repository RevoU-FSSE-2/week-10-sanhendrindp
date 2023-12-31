![Banner](images/Build%20RESTful%20API%20Server.png)

<h5 align="center">Created by Using</h5>
<p align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="50"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="50"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="60"/> </a> </a> </p>

<h5 align="center">Link Project</h5>
<p align="center">
<a href="https://week-10-sanhendrindp-production.up.railway.app/">week-10-sanhendrindp-production.up.railway.app/</a>
</p>

# Project Description

In this week 10 project, we built a RESTful API server using the MongoDB database. This app, later on, can do basic registration for new users and login. Users must have an account by registering and then login. And users will have a role, which is maker and approver. Maker can create a transfer request, but that request will be in pending status first. Then approver can change that status transfer to approved or not approved.

# Folders Structure

Here, i will try to explain the structure of important folders for this project by using the image below.

<p align="center">
<img src="images/1.PNG" width="400"> 
</p>

1. Middleware: This folder serves to store middlewares for this project. It contains 3 files:
   - database-middleware.js : Connection to MongoDB database (linked to Railway).
   - authentication-middleware.js : To authenticate transfer requests by using JWT token. Creating a transfer and getting all transfers will need a token that is obtained when the user login.
   - authorization-middleware : To authorize based on users role, maker or approver.
2. Routes: This folder serves to set the route for users and transfers, contains 2 files:
   - user-route.js : For login and users register.
   - transfer-route.js : For transfer route.
3. Controller: This folder contains logic code for folder routes. It contains 2 files:
   - user-controller.js : Logic code for user-route.js
   - transfer-controller.js : Logic code for transfer-route.js
4. Config: Contain jwt.js to configure JWT token signature.
5. Docs: Contain openapi.yaml for API documentation which can be run by using Swagger.

# Testing All Endpoints Using Postman

1. **POST : /users/register**
   <p align="center">
   <img src="images/Register.PNG" width="700"> 
   </p>

   For register, users need to input their username and password which is for password needs a minimum length of 8, and should contain alphanumeric. Users need to input their role which is maker or approver.

2. **POST : /users/login**
   <p align="center">
   <img src="images/Login.PNG" width="700"> 
   </p>

   When users login, they will generate a token that will be used to get all transfer lists and create a transfer request.

3. **POST : /transfers**
   <p align="center">
   <img src="images/Create a transfer.PNG" width="700"> 
   </p>

   By login, users will generate a token, that token can be used for creating a new transfer request. To create a transfer request user needs to input the amount of transfer and information about the transfer.

4. **GET : /transfers**

   With token, users also can see all transfers lists.

   <p align="center">
   <img src="images/Get all transfer.PNG" width="700"> 
   </p>

5. **PUT : /transfer/approve**

   When login as approver role, user approver need to input ID transfer and then can update the transfer status created by the user maker to approved or not approved status. But remember, to update the status, user approver needs to input the token that is generated when they login.

   <p align="center">
   <img src="images/Approve a transfer.PNG" width="700"> 
   <br>
   <em>Approve Status by Approver Role</em>
   </p>
   <br>
   <br>
   <p align="center">
   <img src="images/Final status.PNG" width="700"> 
   <br>
   <em>Transfer Status After Approval</em>
   </p>

---

<p align="center">Thank you 🙏</p>
