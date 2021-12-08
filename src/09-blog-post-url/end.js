function blogify(title) {
  const urlBase = "https://www.myblog.com/";

  // Replace white space with hyphens
  const noSpaces = title.replace(/\s+/g, "-");

  // Lowercase the entire string
  const lowercase = noSpaces.toLowerCase();

  // Remove punctuation
  const noPunctuationRegex = /[!@#$%^&*()_+={}.,:'"/~`;[\[\]]/g;
  const noPunctuation = lowercase.replace(noPunctuationRegex, "");

  // No consecutive hyphens
  const noConsecutiveHyphens = noPunctuation.replace(/[-]{2,}/g, "-");

  // Remove trailing hyphen
  const noTrailingHyphen = noConsecutiveHyphens.replace(/-$/, "");

  return `${urlBase}${noTrailingHyphen}`;
}

const blogs = [
  "My Summer Studying Abroad!!!",
  "Emma's Favorite Books :)",
  "Best Stockholm restaurants in 2021",
  "There  are a     ton of   spaces",
  'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() []punctuation"',
];

blogs.forEach((blog) => console.log(blogify(blog)));
