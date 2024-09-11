import { NextFunction, Request, response, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import cloudinary from "../config/cloudinary";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function getAllPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page = 1, limit = 2 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const posts = await prisma.post.findMany({
      skip: offset,
      take: Number(limit),
    });

    const totalPost = await prisma.post.count();

    return res.status(200).json({
      data: posts,
      meta: {
        totalPost,
        currentPage: Number(page),
        totalPages: Math.ceil(totalPost / Number(limit)),
      },
    });
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
    const { title, content, authorId } = req.body;

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
      folder: "images",
    });

    await prisma.post.create({
      data: {
        title,
        content,
        authorId: Number(authorId),
        imageUrl: cloudinaryData.secure_url,
      },
    });

    fs.unlink(req.file.path);

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

export async function deletePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    await prisma.post.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
}
