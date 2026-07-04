export const generateSlug = async (title)=> {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')   // replace non-alphanumeric with -
    .replace(/^-+|-+$/g, '');      // remove starting/ending dashes
}
