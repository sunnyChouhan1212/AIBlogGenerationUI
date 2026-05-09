import {
  useState,
} from "react";

import BlogCard from "./components/BlogCard";

import BlogForm from "./components/BlogForm";

import Loader from "./components/Loader";

interface Blog {
  title: string;
  content: string;
}

function App() {
  const [blog, setBlog] =
    useState<Blog | null>(null);

  const [loading, setLoading] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <BlogForm
          setBlog={setBlog}
          setLoading={setLoading}
        />

        {loading && <Loader />}

        {!loading && (
          <BlogCard blog={blog} />
        )}
      </div>
    </div>
  );
}

export default App;