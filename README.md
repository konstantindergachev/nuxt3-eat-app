# nuxt3-eat-app

The nuxt3-eat-app is an example of a full-stack application developed with the Nuxt3 JavaScript framework, Pinia store, Supabase DB and Cloudinary store for image APIs.

- Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.
- Look at the [pinia store documentation](https://pinia.vuejs.org/core-concepts/) to learn more.
- Look at the [supabase database documentation](https://supabase.com/docs) to learn more.
- Look at the [cloudinary store documentation](https://cloudinary.com/documentation) to learn more.

## Step 1: Quick start

```bash
git clone git@github.com:konstantindergachev/nuxt3-eat-app.git
```

## Step 2: Install the dependencies

```bash
# npm
npm install

# yarn
yarn install
```

## Step 3 Save your config variables into .env file

```sh
SUPABASE_URL=<your supabase url>
SUPABASE_KEY=<your supabase key>

CUSTOMER_PASSWORD_SECRET=<your password hashing secret word>

CLOUD_NAME=<your cloudinary store name>
API_KEY=<your cloudinary api key>
API_SECRET=<your cloudinary api secret>
```

## Step 4: Start the app in the development mode

Start the development server on http://localhost:3000

```bash
# npm
npm run dev

# yarn
yarn install
```

## Step 5: Build the application for production

```bash
# npm
npm run build

# yarn
yarn build
```

## Step 5.1: Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

- Checkout the [nuxt 3 deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.

Author of the next3-eat-app: Konstantin Dergachev [portfolio](http://kostyantyn.dergachov.surge.sh/).
