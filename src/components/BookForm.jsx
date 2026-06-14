import { useState } from "react";

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("want to read");

  function handleSubmit(e) {
    e.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      author: author.trim(),
      status,
    });

    setTitle("");
    setAuthor("");
    setStatus("want to read");
  }

  return (
    <section className="mx-auto mb-8 max-w-2xl rounded-2xl border border-stone-200 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-100 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-stone-800">
            Add a new book
        </h2>

    <form onSubmit={handleSubmit} className="space-y-5">

    <div>
        <label htmlFor="title"
          className="mb-2 block text-sm font-semibold text-stone-700">
            Book title
          </label>

          <input
          id="title"
          type="text"
          placeholder="Enter the book title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        />

    </div>

    <div>
        <label
          htmlFor="author"
          className="mb-2 block text-sm font-semibold text-stone-700"
        >
          Author
        </label>

        <input
          id="author"
          type="text"
          placeholder="Enter the author's name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        />
    </div>

    <div>
        <label
          htmlFor="status"
          className="mb-2 block text-sm font-semibold text-stone-700"
        >
          Reading status
        </label>

        <select
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        >
          <option value="want to read">Want to read</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
    </div>

    <button type="submit" 
            className="w-full rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
    >
        Add Book

    </button>

    </form>

    </section>
  );
};

export default BookForm;