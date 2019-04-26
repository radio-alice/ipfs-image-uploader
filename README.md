## Instructions

A user using this program should be able to do the following things:

- Upload one or more image files and store them on IPFS.
- Once the images are successfully uploaded and stored, the user should see the images on the screen, as well as their [unique content hashes](https://github.com/multiformats/cid).
- Fetch an image by its unique hash - this can just be a simple text field where a user can paste in a hash and click a "fetch" button.
- From a UI perspective, a user should be able to view as many images as they want on a page like a collage. You do not have to worry about the collage saving when the user refreshes the page. You also do not need to worry too much about the design and CSS aspect.

##### Uploading to IPFS:

This repository is not intended to gauge your familiarity with IPFS. We've already installed the [`ipfs-http-client`](https://github.com/ipfs/js-ipfs-http-client) for you to use

You can use Infura to upload files:

```js
import ipfsClient from 'ipfs-http-client'

// create a new ipfs client pointing to infura
const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: '5001',
  protocol: 'https',
})

// use the ipfs.add method to pin files
const result = await ipfs.add(<FILE>)
```

##### React dropzone

For uploading files, we have used [react-dropzone](https://github.com/react-dropzone/react-dropzone). If you find it helpful, feel free to `npm install` it

##### Other external dependencies

Feel free to use any other external dependencies you wish. Of course, make sure there are no known security issues or other problems with any dependencies. You souldn't _need_ to add any dependencies to complete all the user stories listed above.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
