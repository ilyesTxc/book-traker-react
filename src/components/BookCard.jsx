// in here I will define the structure of a book

const BookCard = ({ title, author, status }) => {
  return (
    <div className="rounded-xl border border-stone-200 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">Author: {author}</p>
      <p
        className={
          status === "reading"
            ? "text-orange-500"
            : status === "want to read"
              ? "text-blue-500"
              : status === "read"
                ? "text-green-500"
                : "text-gray-500"
        }
      >
        {status}
      </p>
    </div>
  );
};

export default BookCard;
