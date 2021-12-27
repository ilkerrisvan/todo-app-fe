![React.js](https://img.shields.io/badge/React.js-17-72147e?style=flat-square&logo=react&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-3.3.2-f21170?style=flat-square&logo=docker&logoColor=white)
![npm](https://img.shields.io/badge/npm-7.6-ff5200?style=flat-square&logo=npm&logoColor=white)
![yarn](https://img.shields.io/badge/yarn-1.22.4-72147e?style=flat-square&logo=yarn&logoColor=white)

# todo-list-modanisa

Non-responsive search page implementation for Modanisa Case Study.

## Table of Contents:

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [With React Scripts](#with-react-scripts)
  - [With Docker](#with-docker)
- [Building the Project](#building-the-project)
- [Running the Tests](#running-the-test)
- [Contact Information](#contact-information)
- [License](#license)

<br/>

## Getting Started

<hr/>

### Requirements:

<hr/>

- Yarn Package Manager -> Install yarn with npm: `npm install -g yarn`
- Docker v3.3.2 or higher (optional) -> [Docker Get Started Page](https://www.docker.com/get-started)
  <br/>
  <br/>
  Before starting the application, fork/download/clone this repo. There are two different ways to run the application:

### With React Scripts

<hr/>

- Install the required dependencies:

```
yarn install
```

- To run the application in dev mode on [localhost:3000](http://localhost:3000):

```
yarn start
```


```
yarn build  # producing a production build
yarn run server  # running the server
```

<br/>

### With Docker

<hr/>

- Build the docker image with the following code:

```
./docker-build.sh  # for mac users
./docker-build.bat  # for windows users
```


```
docker-compose up -d --build
```

- To stop the application:

```
docker-compose stop
```

<br/>

## Building the Project

<hr/>

- To create an optimized production build:

```
npm run build
```

or

```
yarn build
```

<br/>

## Running the Tests

<hr/>

- To run the unit and snapshots tests:

```
npm test
```

or

```
yarn test
```

<br/>

## Contact Information

<hr/>

#### Author: İlker Rişvan

#### Github: ilkerrisvan

#### Email: ilkerrisvan@outlook.com

#### Date: November, 2021

<br/>

## License

<hr/>

[MIT](https://choosealicense.com/licenses/mit/)
