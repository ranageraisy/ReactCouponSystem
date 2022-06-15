import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyModel } from "../../../../Models/CompanyModel";
import "./UpdateCompany.css";
import notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import { updateCompany } from "../../../../services/Api/AdminApi";
import { companyUpdatedAction } from "../../../../Redux/CompaniesAppState";
import store from "../../../../Redux/store";


function UpdateCompany(): JSX.Element {

    const navigate = useNavigate();

    // // useEffect(() => {
    // //     // If we don't have a user object - we are not logged in
    // //     if (!store.getState().authState.user.token) {
    // //         notify.error(ErrMsg.PLS_LOGIN);
    // //         navigate('/login');
    // //     }
    // // },[])



    const params = useParams();
    const id = +(params.id || '');

    const [company, setCompany] = useState<CompanyModel>(store.getState().companyReducer.companies.filter(company => company.id === id)[0]);

    const schema = yup.object().shape({
        email:
            yup.string()
                .required("Description is required"),
        password:
            yup.string()
                .required("Group is required"),

    });

    // let defaultValuesObj = { id: 0, title: "", description: "", group: "", when: new Date() };
    let defaultValuesObj = { ...company };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<CompanyModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    // const { dirtyFields } = useFormState({
    //     control
    // });

    const sendToRemote = async (company: CompanyModel) => {

        await updateCompany(id, company)
            .then(res => {
                notify.success(SccMsg.UPDATE_COMPANY);
                // Updating global state
                store.dispatch(companyUpdatedAction(res.data));
                // defaultValuesObj.title = task.title || '';
                // defaultValuesObj.description = task.description || '';
                // defaultValuesObj.group = task.group || '';
                // defaultValuesObj.title = task.title || '';
                // defaultValuesObj.when = task.when || new Date();
                navigate('/companyList');

            })
            .catch(err => {
                notify.error(ErrMsg.ERROR_UPDATING_COMPANY);
                console.log(ErrMsg.ERROR_UPDATING_COMPANY);
            });
    }


    return (
        <div className="UpdateCompany">


        </div>
    );
}

export default UpdateCompany;
