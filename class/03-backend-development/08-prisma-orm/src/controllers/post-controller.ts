import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllPost(req: Request, res: Response) {
  try {
    const posts = await prisma.post.findMany();

    res.status(200).json({ data: posts });
  } catch (error) {
    console.error(error);
  }
}

export async function getSinglePost(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.postStatistic.update({
      where: {
        id: Number(id),
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!post) res.status(404).json({ message: "Post not found" });

    res.status(200).json({ data: post });
  } catch (error) {
    console.error(error);
  }
}

export async function searchPost(req: Request, res: Response) {
  try {
    const { text } = req.query;
    const posts = await prisma.post.findMany({
      where: {
        published: true,
        OR: [
          {
            title: {
              contains: text as string,
            },
          },
          {
            content: {
              contains: text as string,
            },
          },
        ],
      },
    });

    res.status(200).json({ data: posts });
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(req: Request, res: Response) {
  try {
    const { title, content, authorId, viewCount } = req.body;

    await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.error(error);
  }
}

export async function updatePostContent(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });

    res.status(200).json({ message: "Post content updated" });
  } catch (error) {
    console.error(error);
  }
}

export async function togglePostPublishedStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const postData = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        published: !postData?.published,
      },
    });

    res.status(200).json({
      message: `${
        postData?.published ? "Post is published" : "Post is drafted"
      }`,
      data: postData,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function draftPost(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        published: false,
      },
    });

    res.status(200).json({ message: "Post drafted" });
  } catch (error) {
    console.error(error);
  }
}

export async function publishPost(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        published: true,
      },
    });

    res.status(200).json({ message: "Post published" });
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost() {}
