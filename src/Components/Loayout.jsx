import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Loayout = () => {
    return (
      <div>
        <div className="container mx-auto">
          <Header />
          <div className="min-h-[calc(100vh-10rem)] bg-gray-50" >
            <Body />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Loayout;