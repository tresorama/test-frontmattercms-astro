type NO_Post = {
  slug: string;
  title: string;
  body: string;
  status: "draft" | "published";
};
const posts: NO_Post[] = [
  {
    slug: "post-one",
    title: "Post One",
    body: "Blog Post Body",
    status: "published",
  },
  {
    slug: "post-two",
    title: "Post Two",
    body: "Blog Post Body",
    status: "published",
  },
];
export const getPosts = () => posts;