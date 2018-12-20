# react-tutorial
React Tutorial with Typescript using Webpack

This is the basic tutorial of React JS with Typescript using Webpack.

Initialize the project , We have to initialize the folder with node by using following command

npm init

Series of prompts will be ask and you can set the defaults. We can change whenever we need later in the package.json file which is auto generated file for us.

Lets install the dependencies which is required to run the project. We will install the webpack globally, as it might use for various projects.

npm install -g webpack

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file.  Add React and React-DOM, along with their declaration files, as dependencies to your package.json file.

npm install --save react react-dom @types/react @types/react-dom
