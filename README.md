# Electron-React-toy-project

The project aims to create simple electron-based program named Resizable Collapse TreeView. 

Used packages are Resizable(re-resizable), Collapse(antd), TreeView(material-ui).

### NOTE

Electron application's title bar is not customized yet. 
If you want to use the title bar now, remove the code `titlebar : "hiddenInset",` part from `./src/main.js` .

## Available Scripts

In the project directory, you can run:

### `npm install`

To run this program, 'node_modules' package should be installed, which is not in this repository.

### `npm install concurrently`

Runs the Electron and React concurrently.

#### `.env`
This file blocks web server hosting and only runs the electron application.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

