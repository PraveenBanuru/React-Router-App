import { Link } from "react-router-dom";
import ManinNavgation from "../components/MainNavigation";

function Home(){
    return <>
    <h1> My Home Page</h1>
    <p>Go to <Link to="/products">List of Products</Link></p>
    </>
}

export default Home;