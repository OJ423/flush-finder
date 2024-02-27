# Flush Finder
An application for IOS and Android helping users find a public near them.

## Overview
Flush Finder allows users to find toilets near them either by searching by city or via their device's geolocation. The application enables users to filter toilet results by:

- Accessibility friendly
- Unisex
- Changing facilities

The application uses a MongoDB backed server that is hosted on Render. Please bear in mind that Render's free tier deactivates after 15 minutes of inactivity so you may have to wait 1-2 minutes when first using the application. Take a look at the [backend repo](https://github.com/AlfredoGvz/final-project-be).

### Contributors

This project was built by [Gareth](https://github.com/gazdean/), [Sabrina](https://github.com/cls-c), [Samson](https://github.com/samsonthompson), [Alfredo](https://github.com/AlfredoGvz), and [Oliver](https://github.com/OJ423/).

## Installation & Guidance
If you want to build upon or use this repo, follow the instructions below.

- `git clone https://github.com/OJ423/flush-finder` to your chosen local directory
- CD into the directory and open it
- `npm install` to install all the dependencies
- `npm start` to view the app (you will need an emulator or Expo installed on your phone)

## Dependencies
Flush Finder is built with React Native using Expo's suite of tools. Below is a list of dependencies and their recommended versions:

- @expo/vector-icons: ^14.0.0,
- @react-native-async-storage/async-storage: ^1.22.2,
- @react-navigation/bottom-tabs: ^6.5.12,
- @react-navigation/core: ^6.4.10,
- @react-navigation/native: ^6.1.10,
- @react-navigation/native-stack: ^6.9.18,
- accordion-collapse-react-native: ^1.1.1,
- axios: ^1.6.7,
- expo: ~50.0.7,
- expo-location: ~16.5.3,
- expo-splash-screen: ~0.26.4,
- expo-status-bar: ~1.11.1,
- galio-framework: ^0.8.0,
- react: 18.2.0,
- react-native: 0.73.4,
- react-native-element-dropdown: ^2.10.1,
- react-native-maps: ^1.10.0,
- react-native-safe-area-context: ^4.9.0,
- react-native-screens: ^3.29.0,
- react-navigation: ^5.0.0

