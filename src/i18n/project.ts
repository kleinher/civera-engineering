import type { CollectionEntry } from 'astro:content';
import type { Locale } from './types';

type ProjectData = CollectionEntry<'projects'>['data'];

export type LocalizedProject = ProjectData;

export function localizeProject(data: ProjectData, locale: Locale): LocalizedProject {
  if (locale === 'en') return data;
  const tr = data.translations?.[locale];
  if (!tr) return data;

  const gallery = data.gallery.map((g, i) => {
    const caption = tr.galleryCaptions?.[i];
    return caption ? { ...g, caption } : g;
  });

  return {
    ...data,
    subtitle: tr.subtitle ?? data.subtitle,
    category: tr.category ?? data.category,
    excerpt: tr.excerpt ?? data.excerpt,
    homeMeta: tr.homeMeta ?? data.homeMeta,
    keyInfo: { ...data.keyInfo, ...(tr.keyInfo ?? {}) },
    overview: tr.overview ?? data.overview,
    scopeItems: tr.scopeItems ?? data.scopeItems,
    challenge: tr.challenge ?? data.challenge,
    civeraScope: tr.civeraScope ?? data.civeraScope,
    gallery,
  };
}
