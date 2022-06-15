import CustomLink from "../../../Pages/CustomLink/CustomLink";
import "./MenuToGo.css";

function MenuToGo(): JSX.Element {
    return (
        <div className="MenuToGo">
			<pre><CustomLink to="companyList"> Company List  </CustomLink></pre>
           <pre><CustomLink to="customerList"> Customer List  </CustomLink></pre>
           <pre><CustomLink to="couponList"> Coupon List  </CustomLink></pre>
           <pre><CustomLink to="addCompany"> add Company  </CustomLink></pre>
           <pre><CustomLink to="addCustomer"> add Customer  </CustomLink></pre>
           <pre><CustomLink to="addCoupon"> add Coupon  </CustomLink></pre>
        </div>
    );
}

export default MenuToGo;
