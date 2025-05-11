import "./utils";

import { LIB_AUTOMATION } from "@digital-alchemy/automation";
import { CreateApplication, StringConfig } from "@digital-alchemy/core";
import { LIB_HASS } from "@digital-alchemy/hass";
import { LIB_SYNAPSE } from "@digital-alchemy/synapse";
import { HelloWorld } from "./hello-world";

type Environments = "development" | "production" | "test";

const HOME_AUTOMATION = CreateApplication({
  // Adding to this array will provide additional elements in TServiceParams for your code to use
  //
  // - LIB_HASS - type safe home assistant interactions
  // - LIB_SYNAPSE - create helper entities (requires integration)
  // - LIB_AUTOMATION - extra helper utilities focused on home automation tasks (requires synapse)
  // - LIB_MQTT - listen & publish mqtt messages
  libraries: [LIB_HASS, LIB_SYNAPSE, LIB_AUTOMATION],

  name: "home_automation",

  // use this list of strings (service names below) to force construction order of services
  priorityInit: [],

  // add new services here
  // keys affect how app is wired together & log contexts
  services: { hello_world: HelloWorld },
});

// add your app to the global modules list (allows access in TServiceParams)
declare module "@digital-alchemy/core" {
  export interface LoadedModules {
    home_automation: typeof HOME_AUTOMATION;
  }
}

setImmediate(
  async () =>
    await HOME_AUTOMATION.bootstrap({
      // Setting this flag will cause your services to not be loaded until all dependency libraries are ready
      bootLibrariesFirst: true,

      // Hard code overrides to library default configurations
      // These can also be set via .env with this pattern: {library}_{var} ex: SYNAPSE_SQLITE_DB
      configuration: {
        boilerplate: {
          // trace | debug | info | warn | error | silent
          LOG_LEVEL: "info",
        },
        synapse: {
          /**
           * Default value considers machine host name & app name. If value changes, synapse will require re-integration.
           * Set to stable value if you want dev/prod setup while preserving common entities.
           *
           * ⚠️ entity states are associated with db
           * this may trigger automation logic if the internal state database is not kept in sync between machines
           */
          // METADATA_UNIQUE_ID: "my_synapse_app",
          /**
           * This file contains internal runtime state, used to preserve entity state between boots
           * Default values used if file not found / deleted
           */
          // SQLITE_DB: "/path/to/alternate/sqlite.db",
        },
      },
    }),
);
