# Crypto Site

[crypto-site](https://next-sample-kubwo86he.now.sh/)

CryptoPriceChecker just a crypto price checker.

## Installation

```bash
git clone repo_name
npm install
npm run dev
```

## Setup

add this script to your `package.json`:

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start -p $PORT",
    "now-build": "next build"
  }
}
```

## Deployment with Zeit Now

create a `now.json` file:

```json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@now/next" }]
}
```

Next, create a `next.config.js` file in the root of the project and specify target as 'serverless':

```javascript
module.exports = {
  target: "serverless"
};
```

build for production, then start on a port.

```bash
npm run build
npm run start or PORT=xxxx npm start
```

install zeit now, then run it. `issues may occur, use sudo alternative`

```bash
npm i -g now or sudo npm i -g --unsafe-perm now
now
```

## Built With:

- [CRA](https://facebook.github.io/create-react-app/) - Create React App
- [Zeit](https://zeit.co/docs/) - Zeit Serverless Hosting
- [Coindesk](https://www.coindesk.com/api) - Coindesk API
- [Fetch](https://www.npmjs.com/package/isomorphic-unfetch) - AJAX Promise

## Authors:

- **Jesus Arteaga**

## Acknowledgments:

- [Deploy-Next.js](https://nextjs.org/learn/basics/deploying-a-nextjs-app) - Next.js
- [React-Deployment](https://facebook.github.io/create-react-app/docs/deployment) - Facebook
- [Prod-Deploy](https://nextjs.org/docs#production-deployment) - Next.js

## Contributing

Pull requests are welcome, still learning myself.

## License

[MIT](https://choosealicense.com/licenses/mit/)
