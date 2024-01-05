import React from "react";
import BlogNewsroom from "./blogNewsroom/blogNewsroom";
import BlogFeatured from "./blogFeatured/blogFeatured";
import BlogArticles from "./blogArticles/blogArticles";
import BlogRecent from "./blogRecent/blogRecent";
import BlogStudies from "./blogStudies/blogStudies";

function Blog() {
  return (
     <div className="Blog">
       <BlogNewsroom/>
       <BlogFeatured/>
       <BlogArticles/>
       <BlogRecent/>
       <BlogStudies/>
     </div>
  );
}

export default Blog;