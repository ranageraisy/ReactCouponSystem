import { CouponModel } from "../../../../Models/CouponModel";
import CustomLink from "../../../Pages/CustomLink/CustomLink";
import "./CouponCard.css";

interface CouponCardProps{
    coupon: CouponModel;
}

function CouponCard(props: CouponCardProps): JSX.Element {


    return (
        <div className="CouponCard">
			 <div>
           <p>id: {props.coupon.id}</p>
           <p>email: {props.coupon.title}</p>
           <p>description: {props.coupon.description}</p>
           <p>category: {props.coupon.category}</p>
      </div>
      <div className="links">
      <CustomLink to={`/updateCompany/${props.coupon.id}`}><button>update coupon</button></CustomLink>
      <CustomLink to={`/deleteCompany/${props.coupon.id}`}><button>delete coupon</button></CustomLink>
      </div>
        </div>
    );
}

export default CouponCard;
