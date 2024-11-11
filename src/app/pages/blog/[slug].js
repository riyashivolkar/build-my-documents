// "use client";
// import React from "react";
// import { useRouter } from "next/router";

// const BlogPost = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const post = BlogPost.find((p) => p.slug === slug);

//   if (!post) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <section className="px-5 bg-white sm:px-24">
//       <div className="px-6 py-10 mx-auto">
//         <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
//           {post.title}
//         </h1>
//         <span className="text-sm text-gray-500">On: {post.date}</span>
//         <img
//           className="object-cover w-full h-56 my-5 rounded-lg lg:w-64"
//           src={post.imageUrl}
//           alt={post.title}
//         />
//         <p className="mt-6 text-gray-700">{post.content}</p>
//       </div>
//     </section>
//   );
// };

// export default BlogPost;
