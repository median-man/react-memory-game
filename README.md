# React Memory Game

This is a memory game which is currently using a Harry Potter theme for the game
tiles. See if you can click all the images without clicking the same image
twice.

![screenshot of app](/docs/screenshot.jpg)

## Using the App

First, clone this repo and install dependencies.
(`git clone git@github.com:median-man/react-memory-game.git && cd react-memory-game && npm i`)

Play the game by clicking on images. Each image click adds a point to the score.
If an image is clicked a second time, the game ends and the score is reset. The
order of the images is shuffled each time an image is clicked. Win the game by
clicking all images without clicking any of the images twice.

## Customize the Theme

Replace the Harry Potter theme images with your own.

First, add images you wish to use to `/public/images` directory.

Then, modify `/src/images.json` using the following schema:

```
[
  {
    // must be unique. used as identifier
    "name": String,

    // alt text for img elements
    "alt": String,

    // name of the image file to use in public/images directory
    "src": String,
  },
  // add an object for each image in public/images directory
]
```

## About

I created this project to review the process of creating a basic React
application bootstrapped with Create React App.

This project was bootstrapped with
[Create React App](https://facebook.github.io/create-react-app/).

[Bootstrap 3](https://getbootstrap.com/docs/3.3/) is used for layout and
styling.
