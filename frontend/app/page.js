import Navbar from "./ketan/Navbar";
import PaginationComponent from "./ketan/Pagination";
import ProductPage from "./product/page";
import Home from "./milind/Home"

const App = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <Home/>
      <br />
      <br />
      <PaginationComponent />
    </div>
  );
}
export default App;