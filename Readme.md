# Phonebook App

## Introduction

This phonebook app is designed to allow users to search for contacts efficiently.
The search functionality is case-insensitive and matches results even with partially entered search terms.
The app displays a list of results with the full name and phone number of the contacts.

## Features

- Case-insensitive search
- Real-time matching of search terms
- Display of full names and phone numbers

<img src="/img/searchFunction.gif" width="300" alt="search Function">

- Responsive user interface for various screen sizes

<img src="/img/resize.gif" width="600" alt="App resizing" >

## Additional Feature

- Dark and Light Mode

<img src="/img/darkmode.gif" width="300" alt="Darkmode">

- Error message if no match is found

<img src="/img/noEntry.png" width="300" alt="no Entry">

## Technology Stack

- **Frontend:** JavaScript, React, Material UI
- **Data Source:** Static JSON file (`telefonbuch.json`)
- **Backend:** Apollo Server (for GraphQL API)

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- Git

### Installation

1. **Enter Repository:**

   ```bash
   cd PhoneBook
   ```

2. **Install Dependecies:**

   ```bash
   npm run install-all
   ```

3. **Start the Backend Server**

   ```bash
   npm run server
   ```

   server runs on `http://localhost:4444`

4. **Start the Frontend**

   ```bash
   npm run client
   ```

   App runs on `http://localhost:5173`

## Usage

1. Open your web browser and navigate to `http://localhost:5173`.
2. Begin typing in the search bar to see real-time matching results from the phone book.

### File Structure

- `index.js`: The main server file setting up the Apollo Server and GraphQL API.
- `graphql/schema.js`: Contains the GraphQL schema definitions.
- `graphql/resolver.js`: Contains the query resolvers for fetching data from the JSON file.
- `database/telefonbuch.json`: The static JSON file used as the data source.
- `src/`: Contains the React frontend application.
  - `components/`: React components.
  - `App.js`: Main React component.
  - `main.jsx`: Entry point for the React application, setting up the Apollo Client and rendering the App component.

## Testing

### Running Tests

To run the tests provided in this repository, follow these steps:

1. **Ensure Dependencies are Installed:**
2. **Ensure Server is Started**
3. **Ensure Frontend is Started**

4. **Start Testing**

   ```bash
   npm run test
   ```

   This command will execute the test suite and provide feedback on whether all tests passed successfully or if there are any failures or errors.
   <img src="/img/tests.png" width="600" alt="run tests">

## Test Coverage

The provided tests cover the following aspects of the application:

- End-to-end functionality of searching names and displaying results.
- Handling of single and multiple search results.
- Display of error messages when no matching entry is found.
- Correct display of all entries when the search input is empty.
