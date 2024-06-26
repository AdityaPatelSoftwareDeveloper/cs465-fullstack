﻿# cs465-fullstack

Technologies Used:

Express, HTML, and JavaScript:
Page Handling: This portion of the site utilized Express, HTML, and JavaScript to render pages. Routes and controllers in Express and JavaScript managed browser requests for pages.
Template Generation: Express could either serve static HTML pages or generate pages dynamically using Handlebars templates filled with database data. These tools worked in tandem to process server requests and deliver responses to the frontend client.
Single Page Application (SPA) with Angular:
Initial Load: The entire SPA is sent to the client upon the first page load. Subsequent page rendering and code execution occur client-side in the browser.
Data Retrieval: Backend calls are only made to fetch data from the database. Unlike Express, which makes multiple server calls whenever a page is loaded or refreshed, the SPA requires a longer initial load time but eliminates the need for additional server calls during navigation within the application.
Backend Database Choice:

NoSQL MongoDB:
Scalability and Speed: MongoDB scales efficiently and queries quickly.
JSON Compatibility: MongoDB's document structure aligns well with JSON formatting, making it suitable for frontend applications.
Functionality:

JSON vs. JavaScript:
Definition: JSON is a data formatting specification used across various programming languages, while JavaScript is a programming language that uses JSON to define objects.
Integration: Frontend and backend communicate through APIs using JSON, enabling RESTful APIs to handle requests and responses.
Code Refactoring Examples:

Template Refactoring: Replacing static HTML pages with Handlebars templates allowed for reusable page structures with dynamic content.
Content Refactoring: Moving content data from static JSON files to MongoDB enabled easier updates without redeploying the website code.
Testing and Security:

API Testing: Methods and endpoints require thorough API testing. Security involves authenticating users and providing valid JWTs for endpoint access.
HTTP Methods: Common methods include GET, POST, PUT, and DELETE. These methods define the interactions between the client and server at various endpoints.
Course Reflection:

Professional Development:

Knowledge Expansion: The course expanded my understanding of full stack development and introduced new technologies like Express.
Project Insight: Unlike my professional experience with existing projects, this course provided the opportunity to build a full stack application from scratch, enhancing my comprehension of how different components fit together.
Skill Enhancement:

JavaScript Proficiency: Improved JavaScript skills through extensive practice.
Node.js and Express: Gained experience with backend development using Node.js and Express, valuable skills often required in the job market.
