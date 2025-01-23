import process from 'node:process';
import { defineCommand } from 'citty';
import { resolve } from 'pathe';
import { isTest } from 'std-env';
import { createNuxtDevServer } from './dev2.mjs';
import { o as overrideEnv } from '../shared/cli.0t4uqXVO.mjs';
import { c as cwdArgs, l as logLevelArgs, e as envNameArgs, b as legacyRootDirArgs, a as logger } from '../shared/cli.TH4BiEd5.mjs';
import 'node:events';
import 'chokidar';
import 'h3';
import 'jiti';
import 'listhen';
import 'perfect-debounce';
import 'ufo';
import '../shared/cli.CoNbGSsT.mjs';
import 'node:fs';
import '../shared/cli.DlcAx0De.mjs';
import '../shared/cli.CixXmuNe.mjs';
import 'ohash';
import 'node:path';
import 'consola';
import 'node:url';

const devChild = defineCommand({
  meta: {
    name: "_dev",
    description: "Run Nuxt development server (internal command to start child process)"
  },
  args: {
    ...cwdArgs,
    ...logLevelArgs,
    ...envNameArgs,
    ...legacyRootDirArgs
  },
  async run(ctx) {
    if (!process.send && !isTest) {
      logger.warn(
        "`nuxi _dev` is an internal command and should not be used directly. Please use `nuxi dev` instead."
      );
    }
    overrideEnv("development");
    const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
    const devContext = JSON.parse(process.env.__NUXT_DEV__ || "null") || {};
    function sendIPCMessage(message) {
      if (process.send) {
        process.send(message);
      } else {
        logger.info(
          "Dev server event:",
          Object.entries(message).map((e) => `${e[0]}=${JSON.stringify(e[1])}`).join(" ")
        );
      }
    }
    process.once("unhandledRejection", (reason) => {
      sendIPCMessage({ type: "nuxt:internal:dev:rejection", message: reason instanceof Error ? reason.toString() : "Unhandled Rejection" });
      process.exit();
    });
    const nuxtDev = await createNuxtDevServer({
      cwd,
      overrides: ctx.data?.overrides,
      logLevel: ctx.args.logLevel,
      clear: !!ctx.args.clear,
      dotenv: !!ctx.args.dotenv,
      envName: ctx.args.envName,
      port: process.env._PORT ?? undefined,
      devContext
    });
    nuxtDev.on("loading", (message) => {
      sendIPCMessage({ type: "nuxt:internal:dev:loading", message });
    });
    nuxtDev.on("restart", () => {
      sendIPCMessage({ type: "nuxt:internal:dev:restart" });
    });
    nuxtDev.on("ready", (payload) => {
      sendIPCMessage({ type: "nuxt:internal:dev:ready", port: payload.port });
    });
    await nuxtDev.init();
  }
});

export { devChild as default };
