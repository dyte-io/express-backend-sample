<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.in">
    <img src="https://assets.dyte.io/logo-outlined.png" alt="Logo" width="120">
  </a>

  <h3 align="center">Express Backend Sample</h3>

  <p align="center">
    An ExpressJS backend sample to interact with Dyte's REST API.
    <br />
    <a href="https://docs.dyte.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.io">View Demo</a>
    ·
    <a href="https://github.com/dyte-io/express-backend-sample/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-io/express-backend-sample/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [About](#about)

## Getting Started

Deploy directly to heroku using this button!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
- NodeJS

### Installation

1. Clone the repo

```sh
git clone https://github.com/dyte-io/express-backend-sample.git
```

2. Install NPM packages

```sh
npm install
```

3. Add a `.env` on the root of the repo, with the following variables:

```
DYTE_API_KEY=<Your dyte api key>
DYTE_ORG_ID=<Your dyte org id>
```

4. To run the backend in dev mode (hot reload on changes), run:

```sh
npm run dev
```

To run the backend in production mode, run

```sh
npm run build
npm start
```

<!-- USAGE EXAMPLES -->

## Usage

The APIs in this sample actually the v2 API route structure, and returns the
response returned from the respective v2 API.

Here are the APIs used in this sample:

- [Create a meeting](#create-a-meeting)
- [Add a participant to a meeting](#add-a-participant-to-a-meeting)
- [Fetch all presets](#fetch-all-presets)

### Create a Meeting

| Method | Route       |
| ------ | ----------- |
| `POST` | `/meetings` |

Creates a meeting in your organization.

Request body schema:

```js
z.object({
  title: z.string().optional(),
});
```

[Reference](https://docs.dyte.io/api/?v=v2#/operations/create_meeting)

### Add a participant to a meeting

| Method | Route                               |
| ------ | ----------------------------------- |
| `POST` | `/meetings/:meetingId/participants` |

Adds a participant to a specific meeting.

Request body schema:

```js
z.object({
  name: z.string(),
  picture: z.string().optional(),
  preset_name: z.string(),
});
```

[Reference](https://docs.dyte.io/api/?v=v2#/operations/add_participant)

### Fetch all presets

| Method | Route      |
| ------ | ---------- |
| `GET`  | `/presets` |

Fetches all preset names in your organization.

[Reference](https://docs.dyte.io/api/?v=v2#/operations/get-presets)

## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**. Sincere thanks to all our contributors. Thank you,
[contributors](https://github.com/dyte-io/expressbackend-sample/graphs/contributors)!

You are requested to follow the contribution guidelines specified in
[CONTRIBUTING.md](./.github/CONTRIBUTING.md) and code of conduct at
[CODE_OF_CONDUCT.md](./.github/CODE_OF_CONDUCT.md) while contributing to the
project :smile:.

## Support

Contributions, issues, and feature requests are welcome! Give a ⭐️ if you like
this project!

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE)
for more information.

## About

`express-backend-sample` is created & maintained by Dyte, Inc. You can find us
on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at
`dev [at] dyte.io`. The names and logos for Dyte are trademarks of Dyte, Inc. We
love open source software! See [our other projects](https://github.com/dyte-io)
and [our products](https://dyte.io).
