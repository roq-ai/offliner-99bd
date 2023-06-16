const mapping: Record<string, string> = {
  activities: 'activity',
  events: 'event',
  organizations: 'organization',
  users: 'user',
  venues: 'venue',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
