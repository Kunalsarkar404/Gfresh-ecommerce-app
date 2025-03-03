import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Productdetails from "./pages/Productdetails";
import Category from "./pages/Category/Category";
import Myaccount from "./pages/Myaccount";
import Login from "./pages/Login/Login";
import Testproduct from "./pages/Testproduct";
import Profile from "./pages/profilepage/Profile";
import Addresslist from "./pages/Addresslist";
import OrderHistoryDetails from "./pages/OrderHistoryDetails";
import Credit from "./pages/Credit";
import OrderHistorytwo from "./pages/OrderHistorytwo";
import Productdetailstwo from "./pages/Productdetailstwo";
import Thankyoupage from "./pages/Thankyoupage";
import Termsconditions from "./pages/Termsconditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pay from "./pages/Pay";
import Categoryforbrand from "./pages/Category-for-brand";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/category/:id/:name" element={<Category />} />
        <Route path="/category/:id/:name/:url" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/testproduct" element={<Testproduct />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/productdetailstwo" element={<Productdetailstwo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addresslist" element={<Addresslist />} />
        <Route path="/order-history-detail" element={<OrderHistoryDetails />} />
        <Route path="/order-history" element={<OrderHistorytwo />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/categoryforbrand/:name" element={<Categoryforbrand />} />
        <Route path="/thankyoupage" element={<Thankyoupage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<Termsconditions />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  )

}

export default App;
