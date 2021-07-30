# Comic Vine App

This is an app that provides information about comic characters.
All data comes from [Comic Vine](https://comicvine.gamespot.com).

## Features

- Paginated list of all available characters
- Detailed information page for any character
- Search input with preview
- Add/remove any favorite character
- Edit simple information of any character
- Local storage for favorite and edited character
- Favorite filter
- Dark mode

## Getting Started

First, install the dependencies

```bash
yarn
```

## Running in Dev mode

To start the application in dev mode, run this following:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running in Demo mode

To see the completed result, run this following:

```bash
yarn demo
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run with Docker

First, build the images

```bash
yarn docker:build
```

Then, run the container

```bash
yarn docker:run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
