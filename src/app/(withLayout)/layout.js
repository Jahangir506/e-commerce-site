import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <div className="bg-[#212529] text-white">
          <Navbar />
        </div>
        {children}
        <div className="bg-[#212529] text-text-white">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default layout;
