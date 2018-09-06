# Hello Remesh!

A simple front-end and back-end implementation.

## Setup

```
$ git clone https://github.com/hairarrow/remesh-interview.git
$ cd remesh-interview
$ yarn && cd client; yarn
$ yarn start:dev
```

You should be able to view the app by visiting `locahost:3000`.

_You could also visit_ `localhost:5000/api/[questions || votes || users || messages]`

## The App
- I created the mock data from the Remesh Fake Server repo and the data is being served with express and json-server. I'm using json-server to get up and running quickly.
- The express app is configured to work with React Router
- Animations throught the application are handled with CSS
- I pulled in a couple external components to add some visual nicities that would have taken up a bit too much time to spin up from scratch
  - react-css-transition-group
  - react-flip-move: adds a sort effect when filtering messages
  - react-animated-number: steps through every number between the intial value and a new value. I did this to show simple feedback after taking an action on a session
- Works best on desktop screen sizes... _womp_

