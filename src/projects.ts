// I progetti nella lingua richiesta, nello stesso ordine in entrambe.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Project = CollectionEntry<'projects'> | CollectionEntry<'projectsEn'>;

export async function getProjects(lang: Lang): Promise<Project[]> {
  const list: Project[] = lang === 'en' ? await getCollection('projectsEn') : await getCollection('projects');
  return list.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
