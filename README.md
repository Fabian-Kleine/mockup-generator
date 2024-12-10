# Mockup Generator

A web application for creating mockups for various use cases.

## Table of Contents

* [Introduction](#introduction)
* [System Requirements](#system-requirements)
* [Local Installation](#local-installation)
* [NixOS Installation](#nixos-installation)
* [Usage](#usage)
* [Features](#features)

## Introduction

The Mockup Generator is a web application that allows you to create mockups for various use cases. The application uses Vue.js as the frontend framework and Tailwind CSS for styling.

## System Requirements

* A modern web browser (e.g. Google Chrome, Mozilla Firefox)
* A local installaton of [Node.js](https://nodejs.org)
* A device with internet connection

## Local Installation

```bash
git clone git@github.com:Fabian-Kleine/mockup-generator.git 

cd mockup-generator
```

### Run development server
```bash
npm run dev
```

### Run on production
```bash
npm run build
```
After running the build command you can host the created files from the `dist` folder on a webserver.

## NixOS Installation

```bash
git clone git@github.com:Fabian-Kleine/mockup-generator.git

cd mockup-generator

direnv allow
```

## Usage

1. Open the application in the web browser.
2. Select the desired view to create a mockup.
3. Customize the mockup's.
4. Save the mockup as an image.

## Features

* Create mockups for various use cases (e.g. phone, lock screen, YouTube)
* Customize the mockup's design
