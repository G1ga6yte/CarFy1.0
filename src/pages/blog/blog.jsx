import React from "react";
import BlogNewsroom from "./blogNewsroom/blogNewsroom";
import BlogFeatured from "./blogFeatured/blogFeatured";
import BlogArticles from "./blogArticles/blogArticles";
import BlogRecent from "./blogRecent/blogRecent";
import BlogStudies from "./blogStudies/blogStudies";
import BlogAllArticles from "./blogAllArticles/blogAllArticles";

function Blog() {
  return (
     <div className="Blog">
       <BlogNewsroom/>
       <BlogFeatured/>
       <BlogArticles/>
       <BlogRecent/>
       <BlogStudies/>
       <BlogAllArticles/>
     </div>
  );
}

export default Blog;