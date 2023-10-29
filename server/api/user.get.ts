export default defineEventHandler(async (event) => {
  interface User {
    id: number;
    name: string;
  }

  const user: User = { id: 1, name: "Eric" };

  return { user };
});
