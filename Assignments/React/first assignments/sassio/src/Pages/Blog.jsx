import React from "react";
import BlogNav from "../Components/Blog/BlogNav";
import BlogWrapper from "../Components/Blog/BlogWrapper";
import BlogFooter from "../Components/Blog/BlogFooter";
export default function Blog(){
    return(
        <div>
            <BlogNav/>
            <BlogWrapper/>
            <BlogFooter/>
        </div>
    );
}