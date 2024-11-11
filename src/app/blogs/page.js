"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { blogs } from "@/app/utils/data/blogData";

const BlogsPage = () => {
  const router = useRouter();

  const handleBlogClick = (id) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <section className="px-5 bg-white sm:px-24">
      <div className="px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
          Blog
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer lg:flex"
              onClick={() => handleBlogClick(blog.id)}
            >
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={blog.image}
                alt={blog.title}
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <span className="text-xl font-semibold text-gray-800 hover:underline">
                  {blog.title}
                </span>
                <span className="text-sm text-gray-500">On: {blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
