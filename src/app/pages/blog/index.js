// import React from "react";
// import Link from "next/link";
// import { blogPosts } from "../../data/blogPosts";

// const BlogPage = () => {
//   return (
//     <section className="px-5 bg-white sm:px-24">
//       <div className="px-6 py-10 mx-auto">
//         <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
//           Blog
//         </h1>
//         <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
//           {blogPosts.map((post) => (
//             <div className="lg:flex" key={post.id}>
//               <img
//                 className="object-cover w-full h-56 rounded-lg lg:w-64"
//                 src={post.imageUrl}
//                 alt={post.title}
//               />
//               <div className="flex flex-col justify-between py-6 lg:mx-6">
//                 <Link href={`/blog/${post.slug}`}>
//                   <a className="text-xl font-semibold text-gray-800 hover:underline">
//                     {post.title}
//                   </a>
//                 </Link>
//                 <span className="text-sm text-gray-500">On: {post.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogPage;
