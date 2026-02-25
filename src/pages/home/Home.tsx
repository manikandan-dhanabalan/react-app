import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/action";
import { NavLink } from "react-router-dom";


function Home() {
    
    const dispatch = useDispatch();

   //const theme = useContext(ThemeContext)
   const theme = useContext(ThemeContext);
   console.log(theme);
    return(
        <div>
            <p>Home Component {theme}</p>
            <button onClick={()=> {dispatch(ADD_TO_CART("123"))} }>click Me</button>

            <NavLink to="/list">List</NavLink>
        </div>
               
        
    )
}


export default Home