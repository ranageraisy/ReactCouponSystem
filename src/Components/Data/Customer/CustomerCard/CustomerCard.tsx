import { CustomerModel } from "../../../../Models/CustomerModel";
import CustomLink from "../../../Pages/CustomLink/CustomLink";
import "./CustomerCard.css";

interface CustomerCardProps{
    customer: CustomerModel;
}


function CustomerCard(props: CustomerCardProps): JSX.Element {
    return (
        <div className="CustomerCard">
			<div>
                <p>id:{ props.customer.id} </p>
                <p>name:{ props.customer.first_name} </p>
                <p>email:{ props.customer.email} </p>
            </div>
            <div className ="links">
            <CustomLink to={`/updateCustomer/${props.customer.id}`}><button>update customer</button></CustomLink>
             <CustomLink to={`/deleteCustomer/${props.customer.id}`}><button>delete customer</button></CustomLink>
            </div>
        </div>
    );
}

export default CustomerCard;
