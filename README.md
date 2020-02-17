# Tech stack
- React (react-router)
- PropTypes
- Redux (redux-thunk, redux-form)
- Firestore (Firebase)
- Markdown

# Setup

```bash
# https://github.com/nguyentrucxinh/react-practices/tree/master/react-webpack
npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-eslint babel-loader clean-webpack-plugin copy-webpack-plugin css-loader dotenv-webpack eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react file-loader html-webpack-plugin husky lint-staged mini-css-extract-plugin node-sass prettier react-hot-loader sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge
```

# How to run

```
# Run
npm run dev

# Build
npm run build
npx serve -s build/
```

http://localhost:8000

# Deploy

- `webpack.DefinePlugin` will override .env file

```ps
$env:FIREBASE_API_KEY=""
$env:FIREBASE_AUTH_DOMAIN=""
$env:FIREBASE_DATABASE_URL=""
$env:FIREBASE_PROJECT_ID=""
$env:FIREBASE_STORAGE_BUCKET=""

Get-ChildItem Env:

# Development
npm run dev

# Production
npm run build
npm start
```

# Todo

- [x] CRUD: Read list
- [x] CRUD: Create
- [x] CRUD: Delete
- [x] Memorize: Button Random, Next, Prev
- [x] Deploy to Heroku
- [ ] CRUD: Pagination
- [ ] CRUD: Search
- [ ] CRUD: Update
