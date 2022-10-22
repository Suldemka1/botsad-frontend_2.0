import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MainLayout = ({children}) => {

  return (
    <div className="flex flex-col justify-between">
      <Header/>
        
      {children}

      <Footer />
    </div>
  )
}

export default MainLayout