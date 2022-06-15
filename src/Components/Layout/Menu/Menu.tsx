import CustomLink from "../../Pages/CustomLink/CustomLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu"> 
           <pre><CustomLink to="home">Home </CustomLink></pre>
           <pre><CustomLink to="login"> Login  </CustomLink></pre>
           <pre><CustomLink to="logout"> Logout  </CustomLink></pre>
           <pre><CustomLink to="about"> About</CustomLink></pre>
        </div> 
    );
}

export default Menu;