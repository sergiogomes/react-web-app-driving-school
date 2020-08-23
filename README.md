# React Web App - Driving School

React Web App - Driving School

[![time tracker](https://wakatime.com/badge/github/sergiogomes/ionic-react-app-driving-school.svg)](https://wakatime.com/badge/github/sergiogomes/ionic-react-app-driving-school)

<https://driveridpurse.vercel.app/>

![Students Page](https://raw.githubusercontent.com/sergiogomes/react-web-app-driving-school/master/public/images/students.png)

## Creating a Next.js app

To create a Next.js app, open your terminal, cd into the directory you’d like to create the app in, and run the following command:

```sh
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Under the hood, this uses the tool called create-next-app, which bootstraps a Next.js app for you. It uses this template through the --example flag.

## Commands

Inside this directory, you can run several commands:

```sh
npm run dev
```

Starts the development server.

```sh
npm run build
```

Builds the app for production.

```sh
npm start
```

Runs the built app in production mode.

### When to Use Static Generation v.s. Server-side Rendering

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use **Static Generation** for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose **Static Generation**.

On the other hand, **Static Generation** is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use **client-side** JavaScript to populate data.

#### Static Generation

##### getStaticProps

Essentially, **getStaticProps** allows you to tell Next.js: _“Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”_

#### Server-side Rendering

##### getServerSideProps

You should use **getServerSideProps** only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than **getStaticProps** because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

### Client-side Rendering

If you **do not** need to pre-render the data, you can also use the following strategy (called **Client-side Rendering**):

- Statically generate (pre-render) parts of the page that do not require external data.
- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.

#### SWR

The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.

## Tailwind

```sh
npx tailwind init
```
