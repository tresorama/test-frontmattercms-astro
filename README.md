# Decap CMS + Astro

## Run Decap with content in Local Repo

If you don't need to edit your conetnt from a public page,
you can run Decap with your content in a local git repo.

Migrate to Decap with your content in a remote git repo only 
if you need to.

```
# ensure `local_backend` is true
# in /public/admin/config.yml

# run Decap
npm run cms:local
# that internally runs `npx decap-server`

# navigate to Decap Admin
http://localhost:4321/admin/index.html
```

## Run Decap with content in Remote Repo

- Assuming the repo is on Github and deploy with Netlify
- Deploy at least one time to Netlify
- Enable Netlify Identity in your Netlify Site Settings UI
- Set Decap beackend in `/public/admin/config.yml`
  ```
  local_backend: false

  backend:
    name: git-gateway
    branch: master # Branch to update (optional; defaults to master)
  ```
- Add netlify identity widget
  ```html
  // in public/admin/index.html
  <head>
    <!-- Netlify Identity - used for auth -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>

  // in src/layouts/NetlifyIdentityWidget.astro
  <!-- Netlify Identity - used for auth -->
  <script is:inline src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <script is:inline>
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  </script>

  // in src/layout/Layout.astro
  // or in src/pages/index.astro
  <head>
    <NetlifyIdentityWidget />
  </head>
  ```
- Commit and push/deploy to Netlify
- Navigate to deployed `site.com/admin/index.html`
- Create a new account by clicking Signu up
  - Verfiy your email by clicking the link that should redirect to `yoursite.com/`
- Now you can login also locally.


## Astro defaul README begin here!

## Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
