# create-signalk-plugin
A [Yoeman](https://yeoman.io) project creator for initializing a [SignalK Node Server](https://github.com/SignalK/signalk-server-node) Plugin development project.  This is a wrapper for the [SignalK Plugin Development Generator](https://github.com/joelkoz/generator-signalk-plugin).


## Features
- Jumpstarts plugin development by generating complete project using [SignalKPlugin](https://github.com/joelkoz/signalk-plugin-base) class
- Initial scaffolding writes code to subscribe to the most common SignalK data streams
- Generates plugin configuration options to allow end user to change SignalK paths and/or limit data to a specific data source
- Supports optional front end UI Webapp development using React
- Supports optional RESTful API calls to your plugin to retrieve data

## Usage

Create a new directory to hold your project, make that directory your current
working directory, then run the generator using:

```
npm init signalk-plugin
```

Answer the questions, and a new project will be generated for you.

## WebApp development considerations

If you specified that you would like a WebApp to be part of your plugin, the project generator will install
additional directories and files to support a web UI using [React](https://reactjs.org/).  The `src` directory will contain a place
for you to put [JSX files](https://reactjs.org/docs/jsx-in-depth.html).  Those files need to be translated into regular Javascript files and placed in the `public` 
directory so they can be served up by the Node server.  To do that translation, open a terminal window, make sure your project directory is the current working directory, then issue the following command:

```
npx babel --watch src --out-dir public --presets react-app/prod
```

The above command runs the [Babel](https://babeljs.io/) translator, and will translate any JSX file in 
the `src` directory into pure Javascript and copy the resulting file into the `public` directory for you.

