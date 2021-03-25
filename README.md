# Project README

## The Learning Buddy
CSCI42 Introduction to Software Engineering Project

*(Note: This is a currently updating project.)*

The Learning Buddy is a web application that aims to help students stay productive and organized. Due to the nature of online classes, there is a greater need for students to manage their time and schoolwork better, which can prove very challenging for some. The application acts like a simplified, user-friendly study toolbox that makes productivity and organization easy for students situated in an online learning setting. 

## Scope
The Learning Buddy is a web application that contains five different tools that students may find useful in an online learning environment. The Learning Style Quiz, and Pomodoro Timer are the features of the application that target the improvement of a student’s productivity. The Grade (QPI) Tracker and Task Management pages are features geared towards organization and academic accountability. The system is based on a NoSQL database to run its functions. The project also aims to provide a good user experience to maximize the benefit of using this web application. 

## Referenced Materials

*  **Learning Style Inventory from the Mississippi Bend Area Education Agency** - https://www.mbaea.org/media/documen/learningstyleinventory_survey_1F84C345CE750.pdf
*  **The Pomodoro Technique** - https://todoist.com/productivity-methods/pomodoro-technique

## Operating Environment
The developers of The Learning Buddy will use HTML, CSS, and Javascript with and Firebase. It can run on MacOS and Windows.

## Github Workflow
[Very helpful interactive tutorial on the Git workflow](https://learngitbranching.js.org/)

1. Before creating a new branch from master on your local repo, make sure that you're working with the latest version of the branch. To do that, check first if you're on the master branch using ```git branch```. If you're not, you can switch to the master branch using ```git checkout master```. Then, run ```git pull```, which fetches the updated commits from the remote repo and updates your local repo accordingly.
2. Create a new branch from the master branch. You can create a branch on the remote repo (Github website) or on the local  repo (on your computer); just make sure you're branching off the master branch. To do this locally, run ```git checkout -b branch_name```.
3. Make changes to your code.
4. Run ```git status``` to see what files have been changed. To add a specific file to the stage before committing, run ```git add [path_to_file]```. To add all the changed files to the stage, run ```git add . ```.
5. After adding files to the stage, you can now commit your changes using ```git commit -m "Commit message"```.
**It is bad practice to have ALL your big changes in just one commit. Better to get used to have a purpose for each commit.** i.e. Adding only some files for a commit, then adding the other changed files for another commit, kind of like categorizing your changes.
6. Now that you've committed on your local repo, you can now push them to the remote repo using ```git push```. You can view previous commits on the branch using ```git log```.
7. After you've made all your changes on your branch, make a pull request on the Github website, attempting to merge it with the master branch.
```
git branch
git checkout [branch_name]
git checkout -b [new_branch]
git pull
git status
git add
git commit -m "Commit message"
git push
git log
```

## Files & directories (to be updated)
Currently, the following files are included in this project:

* feedback.html
* feedback.js
* index.html
* learningstylequiz.html
* learningstylequiz.css
* learningstylequiz.js
* pomodorotimer.html
* pomodorofunctionality.js
* qpitracker.html
* qpitracker.js
* signup.html
* signup.js
* style.css
* taskmanagement.html
* taskman.js
* taskmanstyle.css
* README.md
          
* favicon (folder)
    * this folder contains the favion icons and files
* resources (folder)
    * this folder contains icons and buttons
