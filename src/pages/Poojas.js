import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Jsondata from "../components/JSONdatadisplay.jsx"

const Poojas = () => {

    return(
            <div>
                <Nav/>
                <p className="text-4xl text-center font-semibold text-yellow-500 p-5" >Poojas</p>
                <Jsondata/>
                <Footer/>
            </div>
        )
    }
export default Poojas;