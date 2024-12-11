Steps to set up a project:

1. Make sure you have already intsalled nodeJS, mongoDB.
2. Create a new folder.
3. Open this folder in cmd -> CTRL+R-> cmd : cd /pathtofolder.
4. Now to creat a project in this folder use this command: npm init --yes: select yes and a package json file will be created in that folder.
5. Now create a new file "index.js" in that folder, this is our main file.
6. Make sure you have already installed required pakckages i.e express, joi, mongoose, bcryptjs, jsonwebtoken, dotenv, nodemon
7. If not use this command to install these packages as they are must required: npm i express joi mongoose bcryptjs jsonwebtoken dotenv nodemon
8. Create a .env file to store website secrets i.e database url, secret key i.e jwtPrivateKey: yoursecretvalue etc
9. Connect to server and monodb in main file.
10. Create 3 new folders inside main folder: models, routes, middleware.
11. Models should contain all the models of your project.
12. Coding logic should be in routes.
13. In middleware store logic for jwt validation, admin access etc.
14. After creating all this in cmd run this command: node index.js or nodemon index.js to run the project
15. Project will run successfully if you have not make an mistake.
16. If any error occur, it will be logged on cmd, fix it first to start project i.e connection to database filed, check .env file, check database uri.



Testing:

1. Make sure you have installed a testing package or software i.e postman
2. Open it to test an endpoint 
3. Select the required method i.e GET , POST etc
4. Add your route url i.e http://localhost:8888/user/signUp
5. In body pass the data in json format: {
    "name": "abc",
    "email": "abc@gmail.com",
    "password": "12345"
}
6. If there is not errors in your code, it will run and a status: 200 will be shown other wise check in terminal for error to fix
 


Example requests and responses for all endpoints.
1. Register a user

Endpoint: Post->http://localhost:8888/user/signUp

body(json): {
    "name": "abc",
    "email": "abc@gmail.com",
    "password": "12345"
}

response: {
    "id": "675941fef94f3d7cbaecafdb",
    "name": "abc",
    "email": "abc@gmail.com"
}

header: x-auth-token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU5NDM4MGQwODUwYjU1OWMzMDlhZGEiLCJpYXQiOjE3MzM5MDMyMzJ9.zJ12xq6D8wZzMzHSda0KjyXiT-FhmDb8r7qhQKWBf0g

2. Log in a user

Endpoint: Post->http://localhost:8888/auth/logIn

body(json): {
    "email": "abc@gmail.com",
    "password": "12345"
}

response: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU5NDM4MGQwODUwYjU1OWMzMDlhZGEiLCJpYXQiOjE3MzM5MDMzMTJ9.jRy95HQndgoW2IsPAG6aAcy4TgvKvT0XxEPJbTRhOrE",
    "user": {
        "name": "abc",
        "email": "abc@gmail.com"
    }
}

3. Create a task

Endpoint:  Post->http://localhost:8888/task/tasks/

req.header: x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU2NmVmNmYxOGJjYmRhNmQxZjdkOGEiLCJpYXQiOjE3MzM3NTEyODB9.fZ4wX2vO0FR0Por-oztHjLeo-Zpf4PWfL80RXXKY0Cg

body(json):{       
    "title": "Mern Assignment",
    "description": "Mern Assignment with crud operations",
    "completed": true
}

response:{
    "title": "Mern Assignment",
    "description": "Mern Assignment with crud operations",
    "completed": true,
    "createdAt": "2024-12-11T09:29:54.442Z",
    "_id": "67595b92660d2a8691c38b90",
    "__v": 0
}

4. Update an entire task

Endpoint:  Put->http://localhost:8888/task/tasks/67595b92660d2a8691c38b90

id of task to be updated: 67595b92660d2a8691c38b90 -> {       
    "title": "Mern Assignment",
    "description": "Mern Assignment with crud operations",
    "completed": true
}

req.header: x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU2NmVmNmYxOGJjYmRhNmQxZjdkOGEiLCJpYXQiOjE3MzM3NTEyODB9.fZ4wX2vO0FR0Por-oztHjLeo-Zpf4PWfL80RXXKY0Cg

body(json):{       
    "title": "MEAN Assignment",
    "description": "MEAN Assignment: frontend , backend , database",
    "completed": false
}

response:{
    "_id": "67595b92660d2a8691c38b90",
    "title": "MEAN Assignment",
    "description": "MEAN Assignment: frontend , backend , database",
    "completed": false,
    "createdAt": "2024-12-11T09:29:54.442Z",
    "__v": 0
}

5. Update a specific field of a task

Endpoint:  Patch->http://localhost:8888/task/tasks/67595b92660d2a8691c38b90

id of task to be updated: 67595b92660d2a8691c38b90 -> {       
    "title": "MEAN Assignment",
    "description": "MEAN Assignment: frontend , backend , database",
    "completed": false
}


req.header: x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU2NmVmNmYxOGJjYmRhNmQxZjdkOGEiLCJpYXQiOjE3MzM3NTEyODB9.fZ4wX2vO0FR0Por-oztHjLeo-Zpf4PWfL80RXXKY0Cg

body(json):{       
    "title": "MEAN Assignment",
    "description": "MEAN Assignment: frontend , backend , database",
    "completed": true
}


response:{
    "_id": "67595b92660d2a8691c38b90",
    "title": "MEAN Assignment",
    "description": "MEAN Assignment: frontend , backend , database",
    "completed": true,
    "createdAt": "2024-12-11T09:29:54.442Z",
    "__v": 0
}

6. Fetch a specific task based on its ID

Endpoint: Get->http://localhost:8888/task/tasks/6756febef6c8c3e630d6166b

id of task to fetch:6756febef6c8c3e630d6166b

req.header: x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU2NmVmNmYxOGJjYmRhNmQxZjdkOGEiLCJpYXQiOjE3MzM3NTEyODB9.fZ4wX2vO0FR0Por-oztHjLeo-Zpf4PWfL80RXXKY0Cg

response:{
    "_id": "6756febef6c8c3e630d6166b",
    "title": "MERN Stack",
    "description": "Mern Assignment with crud operations",
    "completed": false,
    "createdAt": "2024-12-09T14:29:18.677Z",
    "__v": 0
}

7. Fetching all task

Endpoint: Get->http://localhost:8888/task/tasks

response:{
    "tasks": [
        {
            "_id": "6756febef6c8c3e630d6166b",
            "title": "MERN Stack",
            "description": "Mern Assignment with crud operations",
            "completed": false,
            "createdAt": "2024-12-09T14:29:18.677Z",
            "__v": 0
        },
        {
            "_id": "67595b8c660d2a8691c38b8e",
            "title": "Mern Assignment",
            "description": "Mern Assignment with crud operations",
            "completed": true,
            "createdAt": "2024-12-11T09:29:48.849Z",
            "__v": 0
        },
        {
            "_id": "67595b92660d2a8691c38b90",
            "title": "MEAN Assignment",
            "description": "MEAN Assignment: frontend , backend , database",
            "completed": true,
            "createdAt": "2024-12-11T09:29:54.442Z",
            "__v": 0
        }
    ],
    "pagination": {
        "currentPage": 1,
        "tasksPerPage": 3
    }
}