import BookList from './components/BookList'

const books = [
  {
    id: 1,
    title: "The Silent Library",
    author: "Emma Carter",
    status: "reading",
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "Daniel Brooks",
    status: "want to read",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    author: "Sophia Bennett",
    status: "read",
  },
  {
    id: 4,
    title: "The Last Chapter",
    author: "Liam Foster",
    status: "reading",
  },
  {
    id: 5,
    title: "Paper Moons",
    author: "Olivia Reed",
    status: "want to read",
  },
  {
    id: 6,
    title: "A City of Stories",
    author: "Noah Collins",
    status: "read",
  },
];

const App = () => {
  return(
    <div>
      <BookList books={books} />
    </div>
  )
};

export default App;
