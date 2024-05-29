# Data Management Application

## Description

This project is developed for the course "Applications Web 2.0" as part of my studies. The application allows managing information about countries, towns, and rivers. Users can add, edit, and delete countries, towns, and rivers, as well as view details about towns and rivers.

## Features

1. **Countries**
   - Display a list of countries.
   - Add new countries.
   - Edit existing countries.
   - Delete countries.
   - View detailed information about a country along with a list of towns.

2. **Towns**
   - Display a list of towns.
   - Add new towns.
   - Edit existing towns.
   - Delete towns.
   - View detailed information about a town along with a list of rivers.

3. **Rivers**
   - Display a list of rivers.
   - Add new rivers.
   - Edit existing rivers.
   - Delete rivers.
   - View detailed information about a river along with a list of towns it passes through.

## Filters

The application utilizes Angular's built-in filters:
- `uppercase` - to display town names in uppercase letters.
- `number` - to format numbers.

Additionally, a custom filter `thousands` was implemented to convert population numbers to thousands.

## Starting the API

To start the API, you need to install json-server and run the server with the `db.json` file.

You can do this in two ways:

1. **Directly start json-server:**

   ```bash
   json-server --watch db.json
   ```
2. **Start through npm script:**
   ```bash
   npm run api
   ```
   
## API Endpoints
  - Countries: `http://localhost:3000/countries`
  - Towns: `http://localhost:3000/towns`
  - Rivers: `http://localhost:3000/rivers`
