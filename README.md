Welcome to the **Digital Alchemy** Home Automation quickstart project!

This repository is designed to work as a locally running development server, as well as providing options for long-term deployments.

## 🏗️ Setup

### Prerequisites

Digital Alchemy targets `node20`, which is the only required system dependency.
You should have Home Assistant already running at this point.

**Recommended workspace tools**:

- ⚡ [Volta](https://volta.sh/) - Autonomously manages Node and Yarn versions.

### Clone

Clone the repository to your local machine and change directory to the new repo:

```bash
git clone git@github.com/Digital-Alchemy-TS/standalone-template.git

cd standalone-template
```

### Install Dependencies

Install dependencies using Yarn:

```bash
# (optional) Enable Yarn for setups without Volta
corepack enable

# Install node_modules
yarn install
```

### Configure

Create a new `.env` file based on the template.

```bash
cp .env.template .env
```

> Default contents
```
HASS_TOKEN=LONG_LIVED_ACCESS_TOKEN
HASS_BASE_URL=http://localhost:8123
```

Then configure each variable in `.env` so that the application can connect to your HA instance.

- ⚙️ [Configuration system](/docs/core/configuration)
- ⚙️ [HASS configuration options](/docs/home-automation/hass/configuration)

## 💻 Commands

Once your environment is set up, you can use provided commands from within the `package.json` to manage your workspace.

| NPM Command | Description |
| ---- | ---- |
| **`dev`** | ⏩ Run the development server |
| **`watch`** | 👀 Run the development server<br />**Automatically restart server on code changes** |
| **`upgrade`** | ⏺️ Upgrade all `@digital-alchemy` dependencies<br />**Automatically runs `type-writer` afterwards** |
| **`build`** | 🏗️ Create a dist build of your code in `dist/` folder |
| **`type-writer`** | 🖨️ Rebuild custom type definitions for Home Assistant<br />**Run any time you modify your setup for more accurate definitions** |
