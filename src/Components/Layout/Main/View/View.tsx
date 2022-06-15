import { Outlet } from "react-router-dom";
import Routing from "../../../Routing/Routing";
import "./View.css";

function View(): JSX.Element {
    return (
        <div className="View" >
            <Routing/>
			<Outlet/>
        </div>
    );
}

export default View;