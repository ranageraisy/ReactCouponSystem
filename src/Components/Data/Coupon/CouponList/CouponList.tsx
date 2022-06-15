import { useEffect, useState } from "react";
import { CouponModel } from "../../../../Models/CouponModel";
import { couponsDownloadedAction } from "../../../../Redux/CouponsAppState";
import store from "../../../../Redux/store";
import { getCompanyCoupons } from "../../../../services/Api/CompanyApi";
import { getAllCoupons } from "../../../../services/Api/PublicApi";
import Notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import EmptyView from "../../../Pages/EmptyView/EmptyView";
import CouponCard from "../CouponCard/CouponCard";
import "./CouponList.css";

function CouponList(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.coupons);

    useEffect(() => {
        if (coupons?.length === 0) {
            getAllCoupons().then((res) => {
                setCoupons(res.data);
                store.dispatch(couponsDownloadedAction(res.data));
                Notify.success(SccMsg.GET_ALL_COMPANIES);
            })
                .catch((err) => { Notify.error(ErrMsg.ERROR_GET_ALL_CUSTOMERS); });

        }
    }
        , [])
    return (
        <div className="CouponList">
		  {(coupons?.length > 0)
                ?
                <div className="container">
                    {coupons.map((coupon => <CouponCard key={coupon.id} coupon={coupon} />))}
                </div>
                :
                <EmptyView msg='Coupon List is empty' />
            }

        </div>
    );
}

export default CouponList;


