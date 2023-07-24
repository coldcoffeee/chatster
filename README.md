# Chatster - A Group Chat Application

![white-logo](https://github.com/coldcoffeee/expense-tracker/assets/68056738/1a27da0c-49eb-4059-a37b-b4cf9ac44b86)

Welcome to Chatster, a group chat application that allows users to create accounts, form groups, and engage in real-time chats with other members of the group. The project is built using ExpressJS with MySQL (Sequelize) for data storage, and HTML/JS/Tailwind for the frontend. Image storage for chat support is provided by ImgBB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation and Usage](#installation-and-usage)
- [Technologies Used](#technologies-used)
- [Support and Feedback](#support-and-feedback)

## Introduction

Chatster is a user-friendly group chat application that aims to provide seamless communication within groups. Users can sign up, create and manage groups, invite members, and chat with each other, sharing images and messages effortlessly.

## Features

- **Signup and Login**: Users can create accounts and log in to access their group chats.

- **Group Management**: Users can create new groups and delete existing groups as needed.

- **Group Administration**: Group admins have the authority to manage group members and settings.

- **Group Members**: Users can view all registered users and current members within a group.

- **Real-time Chat**: Engage in real-time conversations with other members of the group.

- **Image Support**: Chat messages support image insertion for easy sharing of visual content.

- ![login](https://github.com/coldcoffeee/expense-tracker/assets/68056738/e432ccbb-1368-4491-961e-ff1d97fbc481)
  
- ![chat](https://github.com/coldcoffeee/expense-tracker/assets/68056738/45f24244-108b-4c34-8919-889239503140)
  
- ![edit_group](https://github.com/coldcoffeee/expense-tracker/assets/68056738/d8f89795-cb06-41b8-9e41-d1dee0226e87)
  

## Folder Structure

The project has the following folder structure:

.
├── app.js  
├── package.json  
├── package-lock.json  
├── controllers  
│ ├── chatControllers.js  
│ ├── groupControllers.js  
│ ├── loginControllers.js  
│ └── signupControllers.js  
├── models  
│ ├── chatModel.js  
│ ├── groupModel.js  
│ └── userModel.js  
├── public  
│ ├── chat.js  
│ ├── login.js  
│ └── signup.js  
├── routes  
│ ├── chatRoutes.js  
│ ├── groupRoutes.js  
│ ├── loginRoutes.js  
│ └── signupRoutes.js  
├── utils  
│ ├── auth.js  
│ ├── db.js  
│ └── root-dir.js  
└── views  
├── 404.html  
├── chat.html  
├── login.html  
└── signup.html  


## Installation and Usage

1. Clone this repository: `git clone https://github.com/colcoffeee/chatster.git`
2. Install the necessary dependencies: `npm install`
3. Set up your MySQL database and configure the connection in `db.js`.
4. Set up required environment variables for image api(imgbb).
5. Run the application: `npm start`
6. Access Chatster in your web browser at `http://localhost:3000`

## Technologies Used

The following technologies were used in building the Chatster application:

- ExpressJS: A fast and minimalist web framework for Node.js, used for handling server-side requests and routing.
- MySQL (Sequelize): A relational database management system, used for data storage and retrieval.
- HTML/JS/Tailwind: The standard markup and scripting languages for creating web pages and user interfaces, styled with Tailwind CSS.
- ImgBB: An image hosting and sharing service, used for storing and serving images in chat messages.

## Support and Feedback

If you encounter any issues while using Chatster or have suggestions for improvement, please feel free to open an issue on the GitHub repository. We appreciate your feedback and are here to assist you.
