import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  createPost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
        authorId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.create({ data: input });
      return post;
    }),

  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany();
    return posts;
  }),

  getPostsByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input, ctx }) => {
      const posts = await ctx.prisma.post.findMany({
        where: { category: input.category },
      });
      return posts;
    }),

  likePost: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.update({
        where: { id: input.id },
        data: { likes: { decrement: 1 } },
      });
      return post;
    }),

  starPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.update({
        where: { id: input.id },
        data: { stars: { increment: 1 } },
      });
      return post;
    }),
});
