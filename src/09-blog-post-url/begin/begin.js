/*
  Punctuation to remove
  [!@#$%^&*()_+={}.,:'"/~`;[\[\]]
*/

function blogify(title) {}

const blogs = [
  "My Summer Studying Abroad!!!",
  "Emma's Favorite Books :)",
  "Best Stockholm restaurants in 2021",
  "There  are a     ton of   spaces",
  'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"',
];

blogs.forEach((blog) => console.log(blogify(blog)));
