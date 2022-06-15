import { useForm } from "react-hook-form";
import { CompanyModel } from "../../../../Models/CompanyModel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCompany } from "../../../../services/Api/AdminApi";
import notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import { useNavigate } from "react-router-dom";
import { companyAddedAction } from "../../../../Redux/CompaniesAppState";
import store from "../../../../Redux/store";

function AddCompany() {

    const navigate = useNavigate();

    const schema = yup.object().shape({

        name:
            yup.string()
                .required("Title is required"),
        email:
            yup.string()
                .required("email is required"),
        password:
            yup.string()
                .required("password is required"),

    });


    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = async (company: CompanyModel) => {

        await addCompany(company)
            .then(res => {
                notify.success(SccMsg.ADDED_COMPANY);
                store.dispatch(companyAddedAction(res.data));
                navigate('/companyList/');

            })
            .catch(err => {
                notify.error(ErrMsg.ERROR_ADDING_COMPANY);
                console.log(err);
                console.log(err.message);
            });
    }

    return (
        <div className="AddCompany">
            <h2>Add new Company</h2>
            <form onSubmit={handleSubmit(sendToRemote)}>
                <span>{errors.name?.message}</span>
                <br />
                <label htmlFor="name">Company Name</label>
                <input type="text" {...register("name")} placeholder="name" />
                <br />
                <span>{errors.email?.message}</span>
                <br />
                <label htmlFor="email">Company Email</label>
                <input type="email" {...register("email")} placeholder="email" />
                <br />
                <span>{errors.password?.message}</span>
                <br />
                <label htmlFor="password">Company Password</label>
                <input type="password" {...register("password")} placeholder="password" />
                <br />
                <button className="button-app" disabled={!isValid} type="submit">Add Company</button>
            </form>
        </div>
    );
}

export default AddCompany;