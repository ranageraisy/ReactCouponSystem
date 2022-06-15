import { useNavigate, useParams } from "react-router-dom";
import { couponDeletedAction } from "../../../../Redux/CouponsAppState";
import store from "../../../../Redux/store";
import { deleteCoupon } from "../../../../services/Api/CompanyApi";
import notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import "./DeleteCoupon.css";

function DeleteCoupon(): JSX.Element {

    
    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');


    // useEffect(() => {
    //     // If we don't have a user object - we are not logged in
    //     if (!store.getState().authState.user.token) {
    //         console.log(store.getState().authState.user);
    //         notify.error(ErrMsg.PLS_LOGIN);
    //         navigate('/login');
    //     }
    // },[])


    const yes = () => {
        deleteCoupon(id)
            .then(any => {
                notify.success(SccMsg.DELETE_COUPON);
                store.dispatch(couponDeletedAction(id));
                navigate('/couponList');
            })
            .catch(err => {
                notify.error(ErrMsg.ERROR_DELETING_COUPON);
                console.log(err)
                console.log(err.message);
            });
    }

    const no = () => {
        navigate('/couponList');
    }


    return (
        <div className="DeleteCoupon">
			 <div className="box">
                <h2>Delete Coupon</h2>
                <p>Are you sure you want to delete Coupon id={id}?</p>
                <div className="one-line">
                    <button className="button-app-danger" onClick={yes}>Yes</button>
                    <button className="button-app-default" onClick={no}>No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCoupon;
