# CRM Frontend

Frontend for a CRM (Customer Relationship Management) application. It is a Vue 2 single-page admin
panel for managing customers, meetings, customer requests, car evaluations, technical support, and
related reference/definition data, with role-based access control.

The UI is in **Turkish**. The app is built on the [Vuexy](https://pixinvent.com/vuexy-vuejs-admin-dashboard-template/)
admin template (Vue CLI + BootstrapVue).

## Tech Stack

- **Vue 2.6** with `@vue/composition-api`
- **Vuex 3** for state management
- **Vue Router 3** (history mode)
- **BootstrapVue** + Bootstrap 4 for UI
- **CASL** (`@casl/ability`) for authorization
- **axios** for HTTP, with JWT auth and token-refresh interceptors
- **vee-validate** for form validation
- Build tooling: **Vue CLI** (`vue-cli-service` / webpack) — *not* Vite
- Charts/maps/extras: ApexCharts, ECharts, Chart.js, Leaflet, FullCalendar, Quill

## Requirements

- Node.js (see `.nvmrc` for the expected version)
- Yarn (preferred — `yarn.lock` is the primary lockfile)

## Getting Started

```bash
# install dependencies
yarn install

# start the dev server (hot reload)
yarn serve

# production build (outputs to dist/)
yarn build

# lint
yarn lint
```

> Note: `lintOnSave` is disabled in `vue.config.js`, so run `yarn lint` manually.

### Backend API

The app talks to a REST backend. The base URL is configured in
[`src/libs/axios.js`](src/libs/axios.js) and currently defaults to `http://localhost:3000`.
The API is "REST-over-POST" — most operations (including reads) are `POST` requests.

Auth endpoints (login/register/refresh/logout) are defined in
[`src/@core/auth/jwt/jwtDefaultConfig.js`](src/@core/auth/jwt/jwtDefaultConfig.js).

## Project Structure

```
src/
├── @core/            # Vuexy template internals — do NOT edit for app features
├── assets/           # styles, images
├── auth/             # auth helpers (jwt wiring, localStorage user/token utils)
├── libs/             # 3rd-party integrations (axios, acl, toast, sweet-alerts, …)
├── navigation/       # sidebar / horizontal menu definitions
├── router/
│   ├── index.js      # router setup + global navigation guard
│   └── routes/Admin/ # per-feature route definitions
├── store/
│   ├── index.js      # Vuex root: registers all modules
│   └── Admin/        # per-feature Vuex modules
├── views/Admin/      # per-feature pages (Index / Add / Edit / View)
├── main.js           # app entry
└── App.vue
```

Features are grouped under `Admin/` into `Core`, `App`, `Data`, and `Defines`.

## Architecture

### Feature-module triplet

Each CRUD feature is implemented as three parallel pieces that mirror the same
`Admin/<Group>/<Feature>` path:

1. **Route** — `src/router/routes/Admin/.../<Feature>.js` (array of route objects)
2. **Store** — `src/store/Admin/.../<feature>.js` (namespaced Vuex module)
3. **Views** — `src/views/Admin/.../` (`Index.vue`, `Add.vue`, `Edit.vue`, `View.vue`)

Modules are **not** auto-discovered. Adding a feature requires registering it in three index files:

- `src/router/index.js` — import the route array and spread it into `routes`
- `src/store/index.js` — import the module and add it to `modules`
- `src/navigation/vertical/index.js` (and/or `horizontal`) — add the menu entry

### Store convention

Vuex modules follow a fixed shape (see `src/store/Admin/Data/Customers/customers.js`).
Each defines a `ROOT_URL` and state of `dataList` / `dataCounts` / `dataItem` / `dataSave` /
`dataLoading`, with conventional actions:

| Action        | Request                     |
| ------------- | --------------------------- |
| `getDataList` | `POST {ROOT_URL}`           |
| `getDataItem` | `POST {ROOT_URL}/getRow`    |
| `saveData`    | `POST {ROOT_URL}/createData`|
| `removeData`  | `POST {ROOT_URL}/removeData`|

### Authorization (CASL)

Access is enforced per route via `meta`, not by role. Each route declares
`meta: { resource: 'ADMIN_<FEATURE>_<ACTION>', action: 'read' }`. The global
`router.beforeEach` guard checks the CASL ability (from `userData.ability` in localStorage)
against the route's `resource`/`action`; unauthorized users are redirected to login or a
"not authorized" page.

### Auth / JWT

`src/@core/auth/jwt/jwtService.js` installs axios interceptors that attach
`Authorization: Bearer <token>` and a `Locale` header, and transparently refresh the access
token on a `401` (queuing concurrent requests). Tokens and `userData` are stored in
localStorage.

## License

Private / proprietary. Built on the Vuexy template, which is subject to its own license.
