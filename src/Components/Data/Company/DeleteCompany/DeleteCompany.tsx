import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { companyDeletedAction } from "../../../../Redux/CompaniesAppState";
import store from "../../../../Redux/store";
import { deleteCompany } from "../../../../services/Api/AdminApi";
import notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {

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
        deleteCompany(id)
            .then(any => {
                notify.success(SccMsg.DELETE_COMPANY);
                store.dispatch(companyDeletedAction(id));
                navigate('/companyList');
            })
            .catch(err => {
                notify.error(ErrMsg.ERROR_DELETING_COMPANY);
                console.log(err)
                console.log(err.message);
            });
    }

    const no = () => {
        navigate('/companyList');
    }



    return (
        <div className="DeleteCompany">
            <div className="box">
                <h2>Delete Company</h2>
                <p>Are you sure you want to delete Company id={id}?</p>
                <div className="one-line">
                    <button className="button-app-danger" onClick={yes}>Yes</button>
                    <button className="button-app-default" onClick={no}>No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCompany;
