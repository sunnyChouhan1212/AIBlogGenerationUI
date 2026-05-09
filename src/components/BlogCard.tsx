import {
  useEffect,
  useState,
} from "react";

import ReactMarkdown from "react-markdown";

interface Blog {
  title: string;
  content: string;
}

interface BlogCardProps {
  blog: Blog | null;
}

const BlogCard = ({
  blog,
}: BlogCardProps) => {
  const [displayedTitle, setDisplayedTitle] =
    useState("");

  const [
    displayedContent,
    setDisplayedContent,
  ] = useState("");

  useEffect(() => {
    if (!blog) return;

    setDisplayedTitle("");
    setDisplayedContent("");

    let titleIndex = 0;

    const titleInterval = setInterval(() => {
      setDisplayedTitle(
        blog.title.slice(0, titleIndex)
      );

      titleIndex++;

      if (titleIndex > blog.title.length) {
        clearInterval(titleInterval);

        const words =
          blog.content.split(" ");

        let contentIndex = 0;

        const contentInterval =
          setInterval(() => {
            setDisplayedContent(
              words
                .slice(0, contentIndex)
                .join(" ")
            );

            contentIndex++;

            if (
              contentIndex > words.length
            ) {
              clearInterval(
                contentInterval
              );
            }
          }, 30);
      }
    }, 30);

    return () => {
      clearInterval(titleInterval);
    };
  }, [blog]);

  if (!blog) return null;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 mt-6">
      <h1 className="text-4xl font-bold mb-6">
             <ReactMarkdown>
                    {displayedTitle}
             </ReactMarkdown>
      </h1>

      <div className="prose max-w-none">
        <ReactMarkdown>
          {displayedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogCard;