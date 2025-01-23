import { promises, existsSync } from 'node:fs';
import { join } from 'pathe';
import { a as logger } from './cli.TH4BiEd5.mjs';

async function exists(path) {
  try {
    await promises.access(path);
    return true;
  } catch {
    return false;
  }
}
async function clearDir(path, exclude) {
  if (!exclude) {
    await promises.rm(path, { recursive: true, force: true });
  } else if (existsSync(path)) {
    const files = await promises.readdir(path);
    await Promise.all(
      files.map(async (name) => {
        if (!exclude.includes(name)) {
          await promises.rm(join(path, name), { recursive: true, force: true });
        }
      })
    );
  }
  await promises.mkdir(path, { recursive: true });
}
function clearBuildDir(path) {
  return clearDir(path, ["cache", "analyze"]);
}
async function rmRecursive(paths) {
  await Promise.all(
    paths.filter((p) => typeof p === "string").map(async (path) => {
      logger.debug("Removing recursive path", path);
      await promises.rm(path, { recursive: true, force: true }).catch(() => {
      });
    })
  );
}
async function touchFile(path) {
  if (await exists(path)) {
    return;
  }
  await promises.writeFile(path, "").catch(() => {
    logger.error(`Failed to create file: ${path}`);
  });
}

export { clearBuildDir as a, clearDir as c, rmRecursive as r, touchFile as t };
