# Edu Client

Product focuses on 100% education as well as upskilling developing countries and rural areas. 

# To start contributing, follow the below guidelines: 

**1.**  Fork [this](https://github.com/codeforcauseorg/edu-client.git) repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/edu-client.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd edu-client
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/codeforcauseorg/edu-client.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are supposed to make a PR to.


**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.


**14.** Click on `Create Pull Request`.

**Run with yarn

***1.*** Open Project Folder</br>

***2.*** To install all dependencies run
```
yarn install
```

***3.*** If you face any ```ERR regarding ESOCKETTIMEOUT```
run: ```yarn install --network-timeout 500000```

***4.*** To run development server.This will run the development server in the http://localhost:3000
```
yarn start
```

**Run with npm

<details><summary>Click Here</summary>
<p>

#### open project folder and

***1.*** To install all dependencies run
```
npm install
```
***2.*** To run development server.This will run the development server in the http://localhost:3000
```
npm start
```

</p>
</details>



