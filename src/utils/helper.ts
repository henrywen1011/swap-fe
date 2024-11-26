/**
 * Splits an array into chunks of a specified size.
 *
 * @param array - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0 || !array) {
    return [];
  }

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

/**
 * Toggle Array: if exist, remove. If not exist, add it.
 *
 * @param array - The array to chunk.
 * @param item - The item to add.
 * @returns An array of result.
 */
export function toggleArray<T>(array: T[] | undefined, item: T): T[] {
  if (!array) return [item];
  const newAry = [...array];
  const index = newAry.indexOf(item);

  if (index === -1) {
    // Number is not in the array, so add it
    newAry.push(item);
  } else {
    // Number is in the array, so remove it
    newAry.splice(index, 1);
  }

  return newAry;
}

export function getContrastColor(hex: string) {
  // Remove the '#' if present
  hex = hex.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white based on brightness
  return brightness > 128 ? "#000000" : "#FFFFFF";
}
