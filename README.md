# MimaTuPlaneta React 2024

The company mimaPlanet asked us to develop the frontend of its internal application for waste management. The main objective is to optimize and efficiently manage the processes of waste collection, classification, and disposal. The application will include features such as route management, container tracking, and the generation of detailed reports, enabling the company to improve operational efficiency and reduce costs.


## Table of Contents

    1.Technology Requirements

    2.Running Tests

    3.Linterns

    4.Project Structure

    5.Color Reference

    6.Screenshots

    7.Documentation

    8.Authors

    9.Acknowledgements

    10.Appendix

## Technology Requirements

| Technology      | Version  |
| --------------- | -------- |
| Node.js (LTS)       | 20.12.2  |
| pnpm (LTS)             | 9.1.0    |
    

### Build

To manage project dependencies, we will use pnpm,
to build your project locally, run:

``pnpm install`` 

``pnpm run dev``

## Running Tests
To launch the project tests run:

`pnpm run test`.

## Linters

In this project, we use linters to ensure code quality and maintain a consistent coding style. Below are the linters we have integrated and how they contribute to our development workflow:

### ESLint

`pnpm run lint`.

    Configuration: We have configured ESLint to follow the rules defined in our .eslintrc.json file.

### Stylelint
`pnpm run lint:css`

    Configuration: Our Stylelint configuration is in the .stylelintrc.json file

## Color Reference
[comment]: <> (ToDo)

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| $primary-100 | ![#FE0650](https://via.placeholder.com/10/FE0650?text=+) #FE0650 |
| $primary-200 | ![#eb0a02](https://via.placeholder.com/10/eb0a02?text=+) #eb0a02 |
| $primary-300 | ![#CC0540](https://via.placeholder.com/10/CC0540?text=+) #CC0540 |
| $primary-400 | ![#681222](https://via.placeholder.com/10/681222?text=+) #681222 |
| $secondary-100 | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| $secondary-200 | ![#F4F5F7](https://via.placeholder.com/10/F4F5F7?text=+) #F4F5F7 |
| $secondary-300 | ![#eae7e7](https://via.placeholder.com/10/eae7e7?text=+) #eae7e7 |
| $secondary-400 | ![#C8C8C8](https://via.placeholder.com/10/C8C8C8?text=+) #C8C8C8 |
| $secondary-500 | ![#acabab](https://via.placeholder.com/10/acabab?text=+) #acabab |
| $secondary-600 | ![#787878](https://via.placeholder.com/10/787878?text=+) #787878 |
| $secondary-700 | ![#414141](https://via.placeholder.com/10/414141?text=+) #414141 |



## Documentation
[comment]: <> (ToDo)

[Documentation](https://wiki.flowable.com/display/MAES/Documentation+MimaTuPlaneta+React-Spring+20024)


## Authors

- [@edgar.rodriguez](https://code.flowable.com/edgar.rodriguez)
- [@adrian.danvila](https://code.flowable.com/adrian.danvila)
- [@marina.aix](https://code.flowable.com/marina.aix)


## Acknowledgements
 A well-deserved thank you to our mentors.

 - [@sergio.extremera](https://code.flowable.com/sergio.extremera)
 - [@raul.garcia](https://code.flowable.com/raul.garcia)
 - [@carlos.jurado](https://code.flowable.com/carlos.jurado)
 - [@juanluis.romerofresno](https://code.flowable.com/juanluis.romerofresno)
 - [@francisco.pastor](https://code.flowable.com/francisco.pastor)


## Appendix
[comment]: <> (ToDo)

### Main Setup Tasks

When setting up the project, the main tasks include:

- **Selection of Dependencies:**
    - **radix-ui:** A component library for pre-created components such as tables, buttons, etc.
    - **axios:** A library for making HTTP requests.
    - **formik:** A library for building forms in React with ease.
    - **yup:** A schema builder for runtime value parsing and validation.
    - **react:** The main framework for the project.
    - **react-responsive:** A package for creating responsive web applications with media queries.
    - **react-router-dom:** Provides bindings for using React Router in web applications.
    - **react-redux:** Official way to connect React and Redux for state management.
    - **reduxjs/toolkit:** Official toolset for Redux logic.
    - **typescript:** A language for application-scale JavaScript.
    - **testing-library/react:** Provides utilities for testing React components.
    - **vitest:** A testing framework that uses Vite's config and plugins.
    - **eslint:** Identifies and reports on patterns found in ECMAScript/JavaScript code.
    - **prettier:** Enforces a consistent style by parsing and re-printing code with its own rules.
    - **sass:** A pure JavaScript implementation of Sass.
    - **tailwindcss:** A CSS framework for rapidly building custom user interfaces.
    - **postcss:** A tool that lets you use JS plugins to lint, transpile, inline, and manipulate CSS.
    - **autoprefixer:** A PostCSS plugin that adds vendor prefixes to CSS rules based on browser support data.
    - **vite:** A frontend build tool that improves development experience.
    - **pnpm:** A package manager for Node.js that uses content-addressable storage and supports monorepos.

