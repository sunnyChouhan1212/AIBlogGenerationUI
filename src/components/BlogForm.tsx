import {
  FormEvent,
  useState,
} from "react";

import {
  generateBlog,
} from "../services/api";

interface Blog {
  title: string;
  content: string;
}

interface BlogFormProps {
  setBlog: (
    blog: Blog | null
  ) => void;

  setLoading: (
    loading: boolean
  ) => void;
}

const BlogForm = ({
  setBlog,
  setLoading,
}: BlogFormProps) => {
  const [topic, setTopic] =
    useState("");

  const [language, setLanguage] =
    useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert("Topic is required");
      return;
    }

    try {
      setLoading(true);

      const payload: {
        topic: string;
        current_language?: string;
      } = {
        topic,
      };

      if (language) {
        payload.current_language =
          language;
      }

      const response =
        await generateBlog(payload);

      setBlog(response.data.blog);
    } catch (error) {
      console.error(error);

      alert(
        "Error generating blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        Agentic AI Blog Generator
      </h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">
          Blog Topic
        </label>

        <input
          type="text"
          placeholder="Enter topic..."
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">
          Translation Language
        </label>

        <select
          value={language}
          onChange={(e) =>
            setLanguage(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        >
          <option value="">
            None
          </option>

          <option value="hindi">
            Hindi
          </option>

          <option value="french">
            French
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90"
      >
        Generate Blog
      </button>
    </form>
  );
};

export default BlogForm;