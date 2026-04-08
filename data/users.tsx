// Static user data for client-side consumption
// Server-side code should use lib/data.ts directly

import usersJson from "./users.json";

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export const users: User[] = usersJson as User[];

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
