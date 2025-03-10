import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleData = {
      title,
      date,
      description,
    };

    try {
      const response = await fetch("http://localhost:8080/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        throw new Error("Failed to post article");
      }

      setSuccess("Article posted successfully!");
      setError(null);
      setTitle("");
      setDate("");
      setDescription("");

      // Redirect to articles list after successful post
      setTimeout(() => {
        navigate("/articles");
      }, 2000);
    } catch (err) {
      setError("An error occurred while posting the article");
      setSuccess(null);
    }
  };

  return (
    <div className="flex min-h-fit items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-gray-900 p-6">
        <h2 className="text-center text-2xl font-bold text-white">Post New Article</h2>

        {error && (
          <div className="rounded-lg bg-red-500 px-4 py-2 text-white">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-lg bg-green-500 px-4 py-2 text-white">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-200">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter article title"
              className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-200">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              placeholder="e.g., 21 JUL"
              className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-200">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="5"
              placeholder="Enter article description"
              className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
          >
            Post Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostArticle;