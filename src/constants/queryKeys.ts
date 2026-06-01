export const QUERY_KEYS = {
  areas: (code?: string) => ['area', { code }] as const,
  realms: (code?: string) => ['realms', { code }] as const
};