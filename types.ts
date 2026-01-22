export const SECTIONS = [
  'hero',
  'tech',
  'comparison',
  'manufacturing',
  'applications',
  'about',
  'footer',
] as const;

export type Section = typeof SECTIONS[number];
