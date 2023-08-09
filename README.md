# Vegas in Miami Small Business Website Frontend
Live website is no longer available

This website was designed for a small business owner who offers classes and workshops. In addition to promoting her personal brand and services, it is also the interface for bookings and payments.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
* React frontend, single page application create with create-react-app. Hosted on Netlify
* HTML and CSS modified from DopeTrope template by https://html5up.net/.
* Ruby on Rails backend API and ActiveAdmin dashboard is in separate repository, https://github.com/Marie-Burns22/pole-backend. Hosted on Heroku.

## Technologies
* React, React Dom
* React Router, React Router Dom

## Setup
For development run on localhost:3001

## Features
* Uses fetch requests to access information from the API.
Booking form updates availability.  Each time-slot has a status of available, requested, or booked. The Rails controller for the time-slots only renders time-slots with a status of available. The form on the front end displays the available time-slots. When a form in submitted, the time-slot is updated in the API to "requested" so that it is not rendered and available to multiple users.
* Booking form triggers Formspree to notifiy business owner of booking. The app is designed for a growing business. While booking numbers remain low, the owner can handle bookings and payments using the Admin dashboard, booking form, and formspree. Once the number of bookings grows, we will implement a third party booking and payment system. 

## To-do list:
* See README.md in https://github.com/Marie-Burns22/pole-backend

## Status
* This website is no longer live.

## Inspiration
This project was inspired by Ms. Vegas who follows her dreams.

## Contact
This project was created by Marie C. Burns. Please email me with any questions or great ideas: mcburns2222@pm.me
