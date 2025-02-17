# Next.js 15 App Router getServerSideProps Error

This repository demonstrates a bug in Next.js 15's app router where using `getServerSideProps` in a page that utilizes experimental features (like the app directory) can result in unexpected errors.  The issue arises from a conflict between the new routing system and the legacy `getServerSideProps` function.

## Bug Description

The provided example demonstrates a simple Next.js page that throws a runtime error when using getServerSideProps within a component that also utilizes the app router and other experimental features.  The solution section details how to resolve this issue using the new data fetching methods recommended in the Next.js 15 app directory structure.

## Setup

1. Clone this repository.
2. Navigate to the project directory: `cd nextjs-app-router-bug`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

You will see the error message in the console when trying to access the page, highlighting the problem.
