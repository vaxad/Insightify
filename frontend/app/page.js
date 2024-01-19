import Navbar from "./ketan/Navbar";
import PaginationComponent from "./ketan/Pagination";

// Home component
const App = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <Home/>
      <PaginationComponent />
    </div>
  );
export default Home;
