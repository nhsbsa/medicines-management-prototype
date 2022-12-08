# Medicines Management Prototype

&ensp;
## Project Setup
### Cloning the project
Clone the project using git:
```shell
git clone https://github.com/nhsbsa/medicines-management-prototype.git
```
or
```shell
git clone git@github.com:nhsbsa/medicines-management-prototype.git
```
### NPM Setup
Once the project is cloned, run the following command to download and install node dependencies:
```shell
npm install
npm install gulp
```
If there are issues downloading dependencies, you may need to add the nhsbsa npm repository.
To do this:
- Create the file ~/.npmrc
- Add the following configuration:
```shell
registry=https://dps-nexus.service.nhsbsa:8443/repository/npm
strict-ssl=false
```

### Install the live reload plugin
Install the live reload plugin for your browser
* [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related)
&ensp;
***
&ensp;
## Running the Prototype locally
To run the prototype locally, use gulp:


```shell
gulp
```

The prototype will then open a window in your browser on http://localhost:3000.

Browser sync settings can be accessed on http://localhost:3001.

## Running Pa11y accessibility checks
 
```shell
pa11y-ci -c pa11y.json
```
&ensp;
***
&ensp;
## Procedure for merging branches
Pull in the latest version of main locally using 

```git pull origin main```

Create a local branch using your initials followed by /. The describe the change, using the Jira ticket number if you have it.

```For example, mpl/MM-700-discontinuation-journey```

Make your changes locally and then push up to Github using your IDE commit tab, or using the following commands in your terminal:

```
git add .
git commit -m "change comments go here"
git push origin local-branch-name
```
&ensp;

| ![image](https://user-images.githubusercontent.com/111366792/206462599-1694bc16-e187-4f2b-b970-9c68f31aa2ce.png) |
|-|
<strong>Once pushed, there should be a highlight at the top of the repo asking to 'compare and pull request'. Select this button.</strong>
<p>&nbsp;</p>

| ![image](https://user-images.githubusercontent.com/111366792/206463076-ce8b10d2-cdc1-4d77-b1a3-71f7b58158cf.png) |
|-|
<strong>Then you need to add a reviewer and create the pull request<strong>
<p>&nbsp;</p>

| ![image](https://user-images.githubusercontent.com/111366792/206469532-0151b98e-40c1-4d11-b7c2-6a4dee1d3f82.png) |
|-|
<strong>The reviewer will be notified and will review the changes before marking it as being able to be merged. Then it can be merged in to main from the pull request, and thus deployed to Heroku. <strong>
<p>&nbsp;</p>


