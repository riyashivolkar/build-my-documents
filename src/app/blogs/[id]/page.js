"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { blogs } from "@/app/utils/data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedBlog = blogs.find((b) => b.id === id);
      setBlog(selectedBlog);
    }
  }, [id]);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="relative p-5 mx-auto sm:p-10 md:p-16">
      <div
        className="h-64 overflow-hidden text-center bg-cover"
        style={{
          height: "450px",
          backgroundImage: `url(${blog.image})`,
        }}
        title={blog.title}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col justify-between mt-3 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
          <div>
            <a
              href="#"
              className="text-xs font-medium text-indigo-600 uppercase transition duration-500 ease-in-out hover:text-gray-900"
            >
              {blog.category}
            </a>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {blog.title}
            </h1>
            <p className="mt-2 text-xs text-gray-700">
              Written By:{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
              >
                {blog.author}
              </a>
            </p>
            <p className="my-5 text-base leading-8">{blog.content}</p>
            {blog.sections &&
              blog.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="my-5 text-2xl font-bold">{section.heading}</h3>
                  <p className="my-5 text-base leading-8">{section.text}</p>
                </div>
              ))}

            <blockquote className="p-5 my-5 text-base italic leading-8 text-indigo-600 border-l-4">
              {blog.quote}
            </blockquote>
            <div className="flex space-x-2">
              {blog.tags &&
                blog.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                  >
                    #{tag}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
