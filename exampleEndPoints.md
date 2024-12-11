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