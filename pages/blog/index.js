import BlogCard from "@/components/BlogCard";
import { blogData } from "../../data/blogData";
import { Fragment } from "react";
import Head from "next/head";

function Blog() {
  return (
    <Fragment>
      <Head>
        <title>Trust Deed Investing Blog | MNAZ</title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap gap-4 w-full justify-evenly py-[2rem] px-[10px]">
          {blogData.map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Blog;
