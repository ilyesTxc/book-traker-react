import BookCard from "./BookCard";
// in here I will represent books using the structure of BookCard

const BookList = ({books,onDelete}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          status={book.status}
          onDelete={onDelete}
        />
        ))}
    </div>
  );
};

export default BookList;
