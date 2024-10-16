import Navbar from "./components/Navbar";
import Catagories from "./components/Catagories";
import Sale from "./components/Sale";
import Recommented from "./components/Recommented";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";





function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Catagories></Catagories>
            <Sale></Sale>
            <Recommented></Recommented>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App