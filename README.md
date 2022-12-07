# GRUnitech WebDev Exam Boilerplate

Welcome! This is a boilerplate for creating web applications using TypeScript and Sass. 

This boilerplate was created using [Vite](https://vitejs.dev/) 
and modified to the WebDev program's needs.

## Installing and Running

### The short version

1. Fork the project to your GitHub. You can change the project's name when forking.
2. Clone the project from your GitHub.
3. Run: `npm install`
4. Run `npm run dev`. 
5. Open the given link.
6. Whenever you change a file, the browser automatically refreshes.
7. To stop the dev server, hit `Ctrl+C`.

### The long version 

1. Fork the project on GiHub to your own user. **Note:**
When forking, you can give the project a different name. 
That's how you can fork this project several times for different purposes. 
2. Clone the project from your own GitHub to your computer, 
in a folder you select for your projects. Get the SSH or HTTPS address from GitHub, 
in the green *Code* dropdown. The command should look like this:
`git clone git@github.com:<your-username>/<the-forked-project-name>.git` 
3. Enter the project folder and run `npm install` (or shorthand `npm i`). 
This will install the libraries stated in `package.json` and their own dependencies
in the folder `node_modules` that will be created automatically when you run this command.
4. Run `npm run dev`. This command runs `vite` (as you can see under `scripts` in `package.json`).
Vite is a tool that helps managing web projects, by running the needed tools 
(TypeScript Compiler, Sass) whenever a file changes, and serving the result using a dev server. 
It does a lot more than that, but we'll dig into Vite and other similar tools on another occasion. 
5. You'll see a link in the terminal. Probably `http://127.0.0.1:5173/`. 
(If you're running several projects using Vite, the port will increase, for example `5174`.)
Click this link to see your web application in the browser. 
6. Whenever you make changes to your project files, 
the Vite server will compile/transpile the changed files and refresh the page on the browser.
Make sure to save your changes. You can set up 'auto save' on your IDE. 
If you make changes to configuration files (`package.json, tsconfig.json`) 
you'll need to stop the dev server and run it again.
7. To stop the dev server (when you finish working, to free up RAM or reset the dev server)
Hit `Ctrl+C` in the terminal where the project is running (or close the terminal window). 

## Developing your web app

The simple way is to write your code in `index.html`, `src/main.ts` and `src/style.scss`.

You can create new files if you know how to export and import them.

You can change the name of the project, the version and other configuration in `package.json`.

## Committing and pushing your changes

Follow git instructions and best practices to commit your work in branches and push it to GitHub.
This project comes with a `.gitignore` file which you can modify if needed.

end

 
 
 