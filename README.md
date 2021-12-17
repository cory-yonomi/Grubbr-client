# Grubber 
## "The Tinder of Food"

## Team name
Da Grubbrs Band

## Each team member's assigned role
- Cory Sorel - Turtle - Creating API and Linking Restaurants, Backend, React
- Lindsay  Haigh- Llama- Back End, Routes, React, Routes
- Eduardo Ferreira - Liger - Front End, React
- Anais Veras - Zoo Keeper - Front End, Wireframe, READme, React

## Elevator Pitch
When “Restaurant goers” can’t decide what they want to eat, Grubbr can help them swipe through restaurants nearby or in searched cities with your friends. The user will be able to add friends that have common restaurants and start chatting or set up a date!

## User Stories
The User: Anyone who likes to go to restaurants, especially people who like to try new restaurants and also needs a date, either a friend or a romantic one.
Well, have you ever been with a partner/friend and you get into an argument because you both cant figure out what to eat? Grubbr can help people make friends based on the same types of restaurants they like.

## Wireframe

![Grubber Wireframe](https://user-images.githubusercontent.com/78924263/146571800-2a8fd0a4-4be3-492e-b8d9-d88a60961e71.jpg)

## Plan
![ERD_and_site_flow](https://user-images.githubusercontent.com/78924263/145642518-055b132d-a2f4-46da-9948-568099b80896.PNG)

- User:
     - When the user first goes to the app they will have to sign up, they will use information like their full name, email, password, ZipCode-required, preference (Vegan, vegetarian, meat-eater etc.), an array of visited restaurants, an array of liked restaurants and an array of “matches”
    - Matches are other users that a user has connected with based on their common restaurants liked
- Restaurant:
    - The information of the restaurants will be called from the Yelp API, where we will get the name, the address and photos
- Comments:
	- The body of the comment will be written by the user
- The restaurant will also have comments but it would only be comments from users on the app, where every user would be able to review the restaurants they have been to.

## Tech Stack
Mongoose, Express.js, React, Node.js, MongoDB

## What your current status is on the project
- Discussed what the app does in user experience
- Designed what pages and routes of the pages
- In process of designing wireframe

## What your plan is for each day of the project work time, preferably broken down into daily sprints.
- First: Getting API built and making sure that Yelp API is giving us the info needed
- Second: React app - Build and connect components
- Third: React finishing - Testing 
- Fourth: Bug squashing - Designing

## Resources
- Yelp Fusion API
    - https://fusion.yelp.com/
- Grubbr's Server GitHub Code
    - https://github.com/ornery-mouse/Grubbr-server