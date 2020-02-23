---
template: post
title: >-
  Build a modern web application. Acquaintance with the project and preparation
  for work. Part 1
slug: build-web-application-1
lang: en
hasTranslation: true
draft: false
date: 2019-11-12T21:59:34.498Z
tags:
  - react
  - javascript
  - webdev
---

In this series of articles, we will go through the full cycle of building an application and create a small library of components

I’m writing this series of articles for Junior Frontend developers who want to create their first JavaScript project and show it to the world 🙂 For this project, I chose the basic stack that can be found in most modern projects. So that you aren’t bored, you can always add something of your own, so I recommend you write your own implementation and publish the result of your work on GitHub while reading the article. Surely you have a dozen technologies, libraries, frameworks, tools that you want to try, and the development of such a pet-project is a great option to use something new 👍

## Acquaintance to the project

The main idea of the project that we'll implement is to write a library of components in React with TypeScript, document and visualize it with Storybook and publish it as a package in npm. We will also configure linters, add tests for Jest, and automate the testing process using Travis CI. Perhaps something else will be added during the work, don’t hesitate to write comments and propose your solution 😉

The article will be divided into several parts so that we can consider in detail each stage of the project.

## Beginning of work

First, we need to create a repository on GitHub for our project.

![GitHub repository](https://thepracticaldev.s3.amazonaws.com/i/6bbcunicifswd3r0h9xv.png)

This is what the new repository creation window looks like. You need to come up with a name and a short description of your repository. For all my pet-project I always choose a public repository. Also, I immediately added the MIT license – this is the simplest and most common version of the license for Open Source projects if you are interested to learn more about the license you can see [this site](https://choosealicense.com/) created by GitHub.

Now let’s clone the new repository. GitHub offers to clone using SSH or HTTPS. Now I use the second method.

```
git clone https://github.com/Alexandrshy/react-ant.git
```

If you see a message about successful unpacking, then the cloning was successful.

We also need to cache the login, if this isn’t done in the next attempts to do `git fetch`, `git clone`, `git push` you will need to enter the username and password ([more about this](https://help.github.com/en/github/using-git/which-remote-url-should-i-use))

```cmd
git config --global credential.helper osxkeychain
```

Let’s move on to creating the `package.json`. To do this, run the command:

```cmd
npm init -y
```

Now in the repository, you can see the `package.json` file with some filled fields, mine looks like this:

```javascript
{
  "name": "react-ant",
  "version": "1.0.0",
  "description": "A set of light React components 🐜",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Alexandrshy/react-ant.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Alexandrshy/react-ant/issues"
  },
  "homepage": "https://github.com/Alexandrshy/react-ant#readme"
}
```

Make small changes:

```javascript
  "keywords": [
    "react",
    "css",
    "UI"
  ],
  "author": {
    "name": "Alex",
    "email": "alexandrshy@gmail.com",
    "url": "https://github.com/Alexandrshy"
  },
  "license": "MIT",
```

I think everything is clear here, and for a more detailed configuration, you may need [this documentation](https://docs.npmjs.com/files/package.json).

We will be returning to the `package.json` configuration in the future. But now it’s time to make the first commit.

```
git status
git add package.json
git commit -m "Init npm package"
git push
```

In a nutshell what we did: checked the change history, indexed the changed `package.json`, made a commit with a simple and clear commit message and then put out changes into a remote repository. Now, `package.json` and information about the new commit appeared in our repository. You can use the IDE or GUI to work with Git, but I’m more comfortable doing everything in the console 🤠

## Linters

To make your code cleaner (this is especially important if several people are working on the project) you definitely need a tool for analyzing and identify errors. In my projects, I use ESLint to check JavaScript code. It’s easy to install and flexibly customizable.

Install ESLint:

```cmd
npm i -D eslint
```

Configure the configuration file:

```cmd
./node_modules/.bin/eslint --init
```

You can configure ESLint manually or use a ready-made set of rules. I like the style guide form [Airbnb](https://github.com/airbnb/javascript). I used the following settings:

```cmd
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? Yes
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
```

Since we’re planning to use TypeScript I immediately selected this item in the dialog box, which causes me to get the error `Cannot find module 'typescript'`. And it’s logical because we haven’t installed TypeScript yet, let’s fix it:

```cmd
npm i typescript
npm i -D @typescript-eslint/parser
```

After installation, you will see the eslintrc configuration file. It’s already configured, but if during development you want to add or change some rules it will come to your aid.

To test ESLint, let’s create `index.ts` file and save the following code there:

```javascript
var a
console.log("a = " + a)

a = 100
```

And run the test:

```cmd
./node_modules/.bin/eslint index.ts
```

Great, the five line code has seven errors and one warning 👍 And immediately ESLint suggests me to automatically fix these errors, let’s try to do this:

```
./node_modules/.bin/eslint index.ts --fix
```

And we get code that has only one warning about using console.log:

```javascript
let a
console.log(`a = ${a}`)

a = 100
```

As you can see the automatic fix working, the errors have been fixed, but the code still looks pretty ugly. For formatting, the code, the best tool, in my opinion, is [Prettier](https://prettier.io/). Let’s add it to our project:

```cmd
npm i -D prettier-eslint
npm i -D prettier-eslint-cli
```

We have installed the main package and CLI to format the files. For ease of use let's create an npm script for Prettier:

```javascript
"scripts": {
    "format": "prettier-eslint '**/*.{js,ts,tsx}' --write"
},

```

I added the `--write` option to overwrite all formatted files. Check the results:

```cmd
npm run format
```

`index.ts`

```javascript
let a
console.log(`a = ${a}`)

a = 100
```

Everything works fine. You can also install plugins for your IDE to format files using keyboard shortcuts or when saving changes. Now let's add a script for ESLint:

```javascript
"scripts": {
    "eslint": "./node_modules/.bin/eslint '**/*.{js,ts,tsx}'",
    "eslint:fix": "npm run eslint -- --fix",
    "format": "prettier-eslint '**/*.{js,ts,tsx}' --write"
},
```

The ideal option when you start a new project is to configure all linters at once, because if you try to implement them in a ready-made project you can see a large number of errors and fix them will take much more time than if you initially took care of the quality of your code.

Save changes:

```cmd
git add .
git commit -m "Added ESLint and Prettier"
git push
```

## Pre-commit hook

We configured ESLing and Prettier and create scripts to run manually, but it would be nice to do this automatically before committing. For this, we can use Git hooks. [Husky](https://github.com/typicode/husky) package make it possible to run a script before executing the `git commit`, and [Lint-staged](https://github.com/okonet/lint-staged) package allows you to check only indexed files by specific filters.

```cmd
npm i -D husky lint-staged
```

Back to package.json and add the following code:

```javascript
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.(js|jsx|ts|tsx)": [
      "npm run eslint:fix",
      "npm run format",
      "git add"
    ]
  },
```

Now before each commit, we will run ESLint and Prettier check for all modified js and ts files and after formatting add these files to our commit.

Let's experiment with the `index.ts` file again:

```javascript
var a
console.log(`a = ${a}`)

a = 100
```

Add this file to the commit:

```cmd
git add index.ts
git commit -m "Testing pre-commit hook"
```

If you now check the `index.ts` file, you'll see that the code has been formatted 🙂 Before saving the changes, the file will be checked and formatted if it is necessary. This allows you to be sure of the correctness of the files that fall into your repository.

## Conclusion

We have to save all the changes. And before that, delete `index.ts` file, we won't need it in the future. Create files `.gitignore` where we write 'node_modules/', we don’t need this file to get into our repository.

```cmd
git add .
git commit -m "Added ESLint and Prettier"
git push
```

You can see the whole result of the work in [repository](https://github.com/Alexandrshy/react-ant). The current state of the project is the master branch, and for each individual article, I'll create a separate branch.

We'll stop here, thank you all for your attention, see you in the next parts 🖖

### Links

- [npm documentation](https://docs.npmjs.com/)
- [ESLint official website](https://eslint.org/)
- [Prettier-eslint](https://github.com/prettier/prettier-eslint)
- [Prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli)
- [Prettier extension for VSCode](https://github.com/prettier/prettier-vscode)
- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)
