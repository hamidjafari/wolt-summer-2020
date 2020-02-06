# Wolt summer 2020 assignment

wolt summer 2020 frontend assignment
there is a list of restaurants in json file
the task is show this restaurants in a respinsive fashion and make them sortable for end-users.
[demo](https://practical-wiles-5fd8c1.netlify.com)

## how to use
1- clone the repo
```bash
git clone https://github.com/hamidjafari/wolt-summer-2020.git
cd wolt-summer-2020
```
2- install dependencies
```bash
npm install
```
3- make sure [gatsby](https://gatsbyjs.org) installed in your system
```bash
npm  install -g gatsby-cli
```
4- run gatsby dev server
```bash
gatsby develop
```
5- open in browser ( default port is 8000 )
```bash
http://localhost:8000
```
## how it works
lets break it in some steps

1. load json data in gatsby's graphql so that we can get it in our pages or components and apply some plugins on data for optimizing and ...
	  - install these plugins `gatsby-source-filesystem gatsby-transformer-json`
	- load plugins in `gatsby-config.js`
  
2. for optimizing restaurant image with gatsby plugin as the image url came from the remote server, first we have to download image then load it as node in graphql
	  - in `gatsby-node.js` use the `createRemoteFileNode` method from source plugin for loading images as node in graphql `Img___NODE`
	  - add gatsby image optimzer plugins `gatsby-transformer-sharp gatsby-plugin-sharp` which can read image nodes and make optimized images for us to use

3. load restaurants array in index page and show them in cards
4. create a custom hook for sorting restaurants in `useSortedRestaurants.js`
