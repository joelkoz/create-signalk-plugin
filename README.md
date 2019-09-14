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

Answer the questions, and voila!
