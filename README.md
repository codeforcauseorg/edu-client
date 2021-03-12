<h1 align="center">
    ✨ Edu Client ✨
</h1>

<p align="center"> <b>
    " Product focuses on 100% education as well as upskilling developing countries and rural areas. " </b>
</p>

## ❤️ Note to new contributors 

Thank you for considering and taking the time to contribute! Before contributing kindly read and follow [Code of conduct](CODE_OF_CONDUCT.md). To help new developers/contributors there are set of instructions added in Contributing.md. Go ahead and read it [here](CONTRIBUTING.md). Which describes the intial stages for working on this project. Also refer the [MIT License](LICENSE.txt).

## 📌 Prerequisites

### 💻 1. System requirement :
1. Any system with basic configuration.
2. Operating System : Any (Windows / Linux / Mac).

### 💿 2. Software requirement :
1. Updated browser
2. Node js installed (If not download it [here](https://nodejs.org/en/download/)).
3. Any text editor of your choice.

### ⚡ 3. Skill set :
1. Knowledge of git & github.
2. JavaScript
3. ReactJS
4. Mobile development Experience in Any Tech (optionally)
5. Ionic / Capacitor (optionally)

## 📌 Setting up Locale Environment

### 🚩 Forking repository :

1. Fistly you have to make your own copy of project. For that you have to fork the repository. You can find the fork button on the top-right side of the browser window. 
2. Kindly wait till it gets forked.
3. After that copy will look like `<your-user-name>/edu-client` forked from `codeforcause/edu-client`.
### 🚩 Clone repository :

1. Now you have your own copy of project. Here you have to start your work.
2. Go to desired location on your computer where you want to set-up the project.
3. Right click there and click on `git bash`. A terminal window will pop up
4. Type the command `git clone <your-fork-url>.git` and hit enter.
5. Wait for few seconds till the project gets copied

### 🚩 Setting up remote :

1. Now you have to set up remote repositories
2. Type the command `git remote -v` this will list the remote connection to your repo.
3. It will show something like this:
```git

origin  https://github.com/<your-user-name>/edu-client.git (fetch)
origin  https://github.com/<your-user-name>/edu-client.git (push)

```
4. Now type the command `git remote add upstream https://github.com/codeforcauseorg/edu-client.git` this will set upstream as main directory
5. Again type in command `git remote -v` to check if remote has been set up correctly
6. It should show something like this :
```git

origin  https://github.com/<your-user-name>/edu-client.git (fetch)
origin  https://github.com/<your-user-name>/edu-client.git (push)
upstream        https://github.com/<your-user-name>/edu-client.git (fetch)
upstream        https://github.com/<your-user-name>/edu-client.git (push)

```

### 🚩 Creating a branch :

Whenever you want to contribute to any project. It is best practice that you should create a branch and push the branch as PR rather than directly pushing main/master branch

1. `git branch` will list all the branched in the repository
2. Now type `git branch <your-branch-name>`
3. You can check the created branch by `git branch`
4. But still if you start editing the edits will go to the main branch. To change the path of the edits type in `git checkout <your-branch-name>`
5. Now you are ready to do the desired changes.

## 📌 Setting up project using `npm` :

1. Open this clonned folder in text editor of your choice
2. If you want to use the project using `npm` then that comes along side when you download and install node js

### 🚩 Running in Deployment mode :

1. Open the terminal and type in `npm start`
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
3. The page will reload if you make edits.
4. You will also see any lint errors in the console.

### 🚩 Testing changes :

1. After changes type `npm test`. This launches the test runner in the interactive watch mode.
2. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. 

### 🚩 Building project :
1. Run the command `npm run build`
2. Builds the app for production to the `build` folder.\
3. It correctly bundles React in production mode and optimizes the build for the best performance.
4. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
5. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


Skip the yarn part and proceed to the Pushing the changes section [here](#pushing-your-changes)

## 📌 Setting up project using `yarn`

1. Open this clonned folder in text editor of your choice
2. If you want to use the project using `yarn` then you can do either of the following
    1. Download Yarn Package manager [here](https://classic.yarnpkg.com/en/docs/install)
    2. If you already have `npm` installed you can simply type in `npm install --global yarn`.
    3. If you already have `choco` installed you can simply type in `choco install yarn` 
    4. If you already have `scoop` installed you can simply type in `scoop install yarn` 
3. To check if the yarn has installed correctly type in `yarn --version` this should show you the current version of yarn.

### 🚩 Running in Deployment mode :

1. Open the terminal and type in `yarn start`
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
3. The page will reload if you make edits.
4. You will also see any lint errors in the console.

### 🚩 Testing changes :

1. After changes type `yarn test`. This launches the test runner in the interactive watch mode.
2. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. 

### 🚩 Building project :
1. Run the command `yarn build`
2. Builds the app for production to the `build` folder.\
3. It correctly bundles React in production mode and optimizes the build for the best performance.
4. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
5. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 📌 Pushing your changes

Now you have made the changes , tested them, and built them. so now its time to push them.
1. Goto your terminal and type `git status` and hit enter, this will show your changes from the files
2. Then type in `git add` and hit enter, this will add all the files to staging area
3. Commit the changes by `git commit -m "<message-describing-your-change>"` and hit enter.
4. Now push your branch to your fork by `git push origin <your-branch-name>` and hit enter.

## 📌 Creating a pull request

By this time you can see a message on your github fork as `your fork is ahead of codeforcause:master by <number> of commits` and also you can see a button called `Compare and pull request`.
1. Click on `Compare and pull request` button.
2. You will see a template.
3. Fill out the template completely by describing your change, cause of change, issue getting fixed etc.
4. After filling the template completely click on `Pull request`
