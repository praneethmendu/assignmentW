# Full stack assignment

Hi Wassenburg, thank you for this opportunity. Hope you like my code.

# frontend
I made my front end using Angular. It is based on a very basic SPA pattern with three pages / views

![alt text](https://github.com/praneethmendu/assignmentW/blob/main/images/img1.jpg?raw=true | width=150)

The Dashboard is where overall status of the system will be displayed. 
![alt text](https://github.com/praneethmendu/assignmentW/blob/main/images/img2.jpg?raw=true | width=150)

The search page lets you filter entries based on available parameters and displays them below. You can open each machine individually.
![alt text](https://github.com/praneethmendu/assignmentW/blob/main/images/img3.jpg?raw=true | width=150)

The machine is page is for displaying details of an individual machine or for requesting a machine by ID
![alt text](https://github.com/praneethmendu/assignmentW/blob/main/images/img4.jpg?raw=true | width=150)

https://www.figma.com/file/P2cq6U29z5WSPqkBcVmXzt/Untitled?node-id=0%3A1

# backend

My approach towards the backend was to use swagger and openAPI to mostly generate the required server. I find that this way there is a single source of truth for the most important details of the api and documentation.

With my OpenAPI config I generated a node.js backend and a client for my frontend Angular app. This also means we can switch to the most appropriate technology at a later stage without much effort.

This approach lets me be unconserned with the implementation details. This is an express server with a simple controller service model. All the code I wrote for the backend sits neatly in one service that pulls from the provided data in a JSON.

The API has just 2 endpoints :
/query lets you filter the machines based on customer name and sensor status 
/machine/:id lets you get a single machine by ID
