
import Footer from "../Footer";
import Header from "../Header";


const PageContainer = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Header />
      
      {/* <Footer /> */}
    </>
  );
};

export default PageContainer;
