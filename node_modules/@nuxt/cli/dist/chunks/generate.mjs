import { defineCommand } from 'citty';
import { c as cwdArgs, l as logLevelArgs, e as envNameArgs, b as legacyRootDirArgs, d as dotEnvArgs } from '../shared/cli.TH4BiEd5.mjs';
import buildCommand from './build.mjs';
import 'node:path';
import 'node:process';
import 'std-env';
import 'consola';
import 'node:url';
import 'pathe';
import '../shared/cli.DGQJ5P32.mjs';
import 'consola/utils';
import 'pkg-types';
import '../shared/cli.DlcAx0De.mjs';
import 'jiti';
import '../shared/cli.0t4uqXVO.mjs';
import '../shared/cli.CoNbGSsT.mjs';
import 'node:fs';

const generate = defineCommand({
  meta: {
    name: "generate",
    description: "Build Nuxt and prerender all routes"
  },
  args: {
    ...cwdArgs,
    ...logLevelArgs,
    ...envNameArgs,
    ...legacyRootDirArgs,
    ...dotEnvArgs
  },
  async run(ctx) {
    ctx.args.prerender = true;
    await buildCommand.run(
      // @ts-expect-error types do not match
      ctx
    );
  }
});

export { generate as default };
