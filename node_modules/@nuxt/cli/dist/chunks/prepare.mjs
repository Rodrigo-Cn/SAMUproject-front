import process from 'node:process';
import { defineCommand } from 'citty';
import { resolve, relative } from 'pathe';
import { a as clearBuildDir } from '../shared/cli.CoNbGSsT.mjs';
import { l as loadKit } from '../shared/cli.DlcAx0De.mjs';
import { d as dotEnvArgs, c as cwdArgs, l as logLevelArgs, e as envNameArgs, b as legacyRootDirArgs, a as logger } from '../shared/cli.TH4BiEd5.mjs';
import 'node:fs';
import 'jiti';
import 'node:path';
import 'std-env';
import 'consola';
import 'node:url';

const prepare = defineCommand({
  meta: {
    name: "prepare",
    description: "Prepare Nuxt for development/build"
  },
  args: {
    ...dotEnvArgs,
    ...cwdArgs,
    ...logLevelArgs,
    ...envNameArgs,
    ...legacyRootDirArgs
  },
  async run(ctx) {
    process.env.NODE_ENV = process.env.NODE_ENV || "production";
    const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
    const { loadNuxt, buildNuxt, writeTypes } = await loadKit(cwd);
    const nuxt = await loadNuxt({
      cwd,
      dotenv: {
        cwd,
        fileName: ctx.args.dotenv
      },
      envName: ctx.args.envName,
      // c12 will fall back to NODE_ENV
      overrides: {
        _prepare: true,
        logLevel: ctx.args.logLevel,
        ...ctx.data?.overrides
      }
    });
    await clearBuildDir(nuxt.options.buildDir);
    await buildNuxt(nuxt);
    await writeTypes(nuxt);
    logger.success(
      "Types generated in",
      relative(process.cwd(), nuxt.options.buildDir)
    );
  }
});

export { prepare as default };
