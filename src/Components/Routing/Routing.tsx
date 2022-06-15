import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import AddCompany from "../Data/Company/AddCompany/AddCompany";
import CompanyList from "../Data/Company/CompanyList/CompanyList";
import DeleteCompany from "../Data/Company/DeleteCompany/DeleteCompany";
import UpdateCompany from "../Data/Company/UpdateCompany/UpdateCompany";
import AddCoupon from "../Data/Coupon/AddCoupon/AddCoupon";
import CouponList from "../Data/Coupon/CouponList/CouponList";
import DeleteCoupon from "../Data/Coupon/DeleteCoupon/DeleteCoupon";
import UpdateCoupon from "../Data/Coupon/UpdateCoupon/UpdateCoupon";
import CustomerList from "../Data/Customer/CustomerList/CustomerList";
import Page404 from "../Pages/Page404/Page404";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
						<Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<CompanyList/>}/>
                <Route path="companyList" element={<CompanyList/>}/>
                <Route path="customerList" element={<CustomerList/>}/>
                <Route path="couponList" element={<CouponList/>}/>
                <Route path="addCompany" element={<AddCompany/>}/>
                <Route path="deleteCompany/:id" element={<DeleteCompany/>}/>
                <Route path="updateCompany/:id" element={<UpdateCompany/>}/>
                <Route path="addCoupon" element={<AddCoupon/>}/>
                <Route path="updateCoupon/:id" element={<UpdateCoupon/>}/>
                <Route path="deleteCoupon/:id" element={<DeleteCoupon/>}/>
                <Route path="*" element={<Page404/>}/>


                {/* <Route path="home" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="logout" element={<Logout/>}/>
                <Route path="addCustomer" element={<AddCustomer/>}/>
                <Route path="UpdateCustomer/:id" element={<UpdateCustomer/>}/>
                <Route path="deleteCustomer/:id" element={<DeleteCustomer/>}/>
                <Route path="BuyCoupon/:id" element={<BuyCoupon/>}/>
                <Route path="about" element={<About/>}/>
                 */}
                
            </Routes>
        </div>
    );
}

export default Routing;