# LivingInCars

## Description 
Living up to it's namesake (pun intended) this command line interface application allows the user to create a vehicle by type, whether truck, car or motorbike. Provided with prompts, the user enters the desired color, make, model, year, weight, type of tire, and if a truck the towing capacity. LivingInCars will then generate a unique VIN number and store the vehicle in a list along with three premade vehicle types that the user also has access to if they do not wish to create their own.

## Motivation 
I was driven (yes another pun) by my desire to further my knowledge of Typescript and object-oriented programming to take on this project.

## What I learned
* Polymorphism, in how different methods will work with different vehicles ex only the motorbike can do a wheelie.
* Building classes and intializing them with constructors.
* Inheritance, specifically extending properties from parent classes onto child classes and using the super() method to invoke the class constructor of the parent class.
* Implement, in order to implement additional properties on a child class that aren't otherwise found in a parent class.

## Technologies used
* TypeScript - To catch errors as they happen and generally providing ease of use for JavaScript.
* Node.js - Allowing the TypeScript compiled into JavaScript to run in the command line interface.
* Inquirer - A package featured on npmjs.com used for user prompts and answers.
* VS Code - The intergrated development environment used for writing this code.

## Challenges 
 * Initially after installing the node modules used for TypeScript and Inquirer the returned several errors at runtime. To resolve them I needed to uninstall, reinstall and then update them to insure no more errors.
 * As a student in a fast paced bootcamp I had to reference class material for refreshers on key concepts.

## Installation 
NOTE User must have Node.js to run program https://nodejs.org/en 

* Clone repository by clicking on the "code" drop down, copying the provided URL, whether SSH or otherwise. Enter "git clone" into your command line interface and navigate to the repo with the cd "change directory" command.
* Once in the repos directory type "npm install" to install all dependencies.
* After previous steps are completed run the program with the "npm start" command.

## How to use
After installation is complete all the user needs to do from there is follow the prompts once the program is started with the "npm start" command.

* Video demonstration of program https://drive.google.com/file/d/1xvEQf2rZb8mOs4LvpwCOmG9B_aCZRbVV/view?usp=sharing

## Credits
* Yan Sergiyenko
GitHub: https://github.com/Enko-Yan

* [Inquirer.js](https://www.npmjs.com/package/inquirer) - Library for interactive command line interfaces.
* EdX Bootcamp - For it's knowledgable instructor and comprehensive curriculum.
* [TypeScript](https://www.typescriptlang.org/) - For it's language and compiler.

## License 
![Static Badge](https://img.shields.io/badge/License-MIT-purple)
