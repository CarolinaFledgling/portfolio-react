# My portfolio Karolina Kulinska

I built a frontend React-powered website connected to a headless Sanity (CMS ) backend that is fully responsible for content management.

With Sanity.io you can manage content.

I created schemas where I can manage content of: skills, projects and save messages from form.
In the contact section I built a form where someone can enter the name , email, and message. The entered data is sent over and saved in Sanity.

## Status

**Work-in-Progress**

## In the coming days I am planing : 

- adding onblur events when we leave input in the fields, we should check if it is empty or not.
- learn how to use and render Portable Text from Sanity, want to use it in the About section. 

- refactoring,  make reusebale components etc.   

## DEMO Link

[Portfolio](https://karolinakulinskaportfolio.netlify.app/)

## See how the form works.

https://user-images.githubusercontent.com/47687566/186982332-7207aae3-18a0-46e1-8aa7-878026f287ad.mp4


## Run Locally

Clone the project

```bash
  git clone https://github.com/CarolinaFledgling/portfolio-react.git
```

```bash

  cd frontend_portfolio

  Install dependencies


  npm install


`npm run start` to start the frontend locally

```

- frontend should be running on [localhost:8000](http://localhost:8000)

### List of all required environment variables

**You can define them in .env for local development.**

- REACT_APP_SANITY_PROJECT_ID=
- REACT_APP_SANITY_TOKEN=

[More info about sanity/client ](https://www.sanity.io/docs/js-client)
### I`m fetching the data from Sanity Studio.

```bash

  cd sanity_studio

Install dependencies

npm install


`sanity start` to start the sanity studio locally

```

- sanity studio should be running on [http://localhost:3333](http://localhost:3333)

## For this project I have used:

- ▶️ React JS
- ▶️ Framer-motion
- ▶️ Sass
- ▶️ Sanity (CMS)

## Sanity CMS

Sanity.io is a platform to build websites and applications. It comes with great APIs that let you treat content like data.
