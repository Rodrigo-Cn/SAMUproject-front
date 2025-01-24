import { useHead } from 'nuxt/app';

export function title(title) {
  useHead({
    title,
  });
}
