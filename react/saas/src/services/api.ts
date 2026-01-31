/**
 * API Service - Handle all API requests here
 * Example: fetch users, create orders, etc.
 */

export async function fetchData(url: string) {
  const response = await fetch(url);
  return response.json();
}
