# My portfolio Karolina Kulinska

I have developed a frontend website using React, with a connected backend powered by Sanity CMS. The Sanity CMS handles all the content management tasks for the website.

With this setup, you can easily manage the content for various sections, such as skills, projects, and messages from the contact form. Speaking of the contact form, visitors can enter their name, email, and message, and this data is securely stored in Sanity CMS.

By combining the power of React for the frontend and Sanity CMS for content management, the website provides a user-friendly experience and simplifies the process of updating and managing content.

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
  # Install dependencies
  npm install
  # to start the frontend locally
  npm run start

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
  # Install dependencies
  npm install
  # To start the sanity studio locally
  sanity start
```

- sanity studio should be running on [http://localhost:3333](http://localhost:3333)

## For this project I have used:

- ▶️ React JS
- ▶️ Framer-motion
- ▶️ Sass
- ▶️ Sanity (CMS)

## Sanity CMS

Sanity.io is a platform to build websites and applications. It comes with great APIs that let you treat content like data.
