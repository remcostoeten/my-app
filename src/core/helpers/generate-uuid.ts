export function generateId(prefix: string = "note"): string {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36
  const randomPart = Math.random().toString(36).substr(2, 5); // Generate 5 random characters
  return `${prefix}_${timestamp}_${randomPart}`;
}
