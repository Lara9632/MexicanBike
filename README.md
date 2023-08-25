**Shopify Theme Development: Liquid & Tailwind**
## Introduction

Welcome, developers! This repository contains a Shopify theme built using Liquid and Tailwind CSS. This theme is designed to provide you with a foundation for creating a customizable and visually appealing online store. Whether you're new to Shopify development or an experienced pro, this theme offers a range of features and tools to streamline your development process.

## Prerequisites

Before you get started, ensure that you have the following installed:

- Node.js (LTS version recommended)
- NPM (Node Package Manager) or Yarn
- Tailwind v3.3.3^
- Shopífy CLI (You can view the requisites in https://shopify.dev/docs/themes/tools/cli/install)


## Getting Started

1. **Clone the repository**: To use this repository for making Shopify themes, use the following command of Shopify CLI.
```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/Lara9632/MexicanBike.git
```


2. **Navigate to the Project Directory**: Move into the project directory using the command:

   ```bash
   cd MexicanBike
   ```

3. **Install Dependencies**: Install the required project dependencies using either NPM or Yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configuration**: Customize the project settings according to your requirements. Modify the `config` files for theme-wide settings, colors, typography, and more.

5. **Development**: Start the development server to work on your theme. This command will compile and serve your assets locally:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The theme will be available at `http://localhost:9292`.

6. **Coding and Customization**: Begin editing the Liquid templates and Tailwind CSS files located in the `src` directory. Leverage the flexibility of Tailwind CSS classes to style your components efficiently.

7. **Testing**: Continuously test your changes on different screen sizes and devices to ensure a responsive design.

8. **Deployment**: Once you're satisfied with your changes, build the production-ready assets:

   ```bash
   npm run build
   # or
   yarn build
   ```

   Upload the generated assets to your Shopify store.

## Customization

Feel free to adapt the theme's components, styles, and layouts to suit your project's needs. Use Tailwind CSS utility classes for rapid development.


This project is created and intended to be used for the [Shopify Theme Development – Online Store 2.0 + TailwindCSS course](https://weeklyhow.com/courses/)

