**Explore Courses**
===================

A responsive web application built with React and TypeScript that displays a catalog of online courses. With this app, users can browse through a variety of courses, explore the details of each course, navigate through the course structure, and use a search feature to quickly find courses by title or description.

**Features**
------------

### Course Browsing

-   Displays a list of all available courses, fetched from a JSON file.
-   Allows users to click on a course to see more details, including descriptions, modules, and lessons.

### Course Detail View

-   Provides an in-depth view of each course, including a list of modules and lessons within each module.
-   Supports various content types, such as text, video, audio, and podcasts, rendering them appropriately in the lesson view.

### Navigation

-   Allows users to smoothly navigate between courses, modules, and lessons.
-   Includes a search feature to filter courses by title or description.

**Tech Stack**
--------------

### **Core Technologies**

-   **React** for the front-end framework.
-   **TypeScript** for robust type-checking and better code structure.

### **Additional Tools**

-   **Redux Toolkit** for state management.
-   **JSON File** for course data, making it simple to fetch and update the course catalog.

**Getting Started**
-------------------

### Prerequisites

Ensure you have the following installed on your local environment:

-   [Node.js](https://nodejs.org/) (v14 or newer)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installation

1.  Clone the repository:

    `git clone https://github.com/Al-E-00/explore_courses`

2.  Navigate to the project directory:

    `cd explore-courses`

3.  Install the project dependencies:

    `npm install`

    or

    `yarn install`

### Running the Application

To run the app in development mode, use the following command:

`npm start`

or

`yarn start`

Then, open http://localhost:3000 to view it in your browser. The app will automatically reload if you make any changes to the code.

**Project Structure**
---------------------

### TypeScript Interfaces

-   **Course**: Represents a course with `id`, `title`, `description`, and `modules`.
-   **Module**: Represents a module with a `title` and a list of `lessons`.
-   **Lesson**: Represents a lesson with a `title`, `description`, `topics`, and `content`.
-   **Content**: Defines various content types, including text, video, audio, and podcast.

### State Management (Redux Toolkit)

-   **Store**: Configured with slices for managing courses, current course, and UI state.
-   **Slices**: Contains reducers for setting the course list, current course, current module, and current lesson.
-   **Async Thunks**: Manages the asynchronous fetching of course data.
-   **Selectors**: Memoized selectors for derived states, such as filtered courses and current lesson content.

### JSON Data Structure

The course data is stored in a JSON file (`courses.json`) for easy maintenance. Each course has a structure containing modules, lessons, and content, making it simple to fetch and update.
