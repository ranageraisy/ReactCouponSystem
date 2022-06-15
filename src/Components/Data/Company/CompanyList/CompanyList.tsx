import { useEffect, useState } from "react";
import { CompanyModel } from "../../../../Models/CompanyModel";
import { companiesDownloadedAction } from "../../../../Redux/CompaniesAppState";
import store from "../../../../Redux/store";
import { getAllCompanies } from "../../../../services/Api/AdminApi";
import Notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import EmptyView from "../../../Pages/EmptyView/EmptyView";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./CompanyList.css";

function CompanyList() {

    const [companies, setCompanies] = useState<CompanyModel[]>(store.getState().companyReducer.companies);

    useEffect(() => {
        if (companies?.length === 0) {
            getAllCompanies()
            .then((res) => {
                setCompanies(res.data);
                store.dispatch(companiesDownloadedAction(res.data));
                Notify.success(SccMsg.GET_ALL_COMPANIES);
            })
                .catch((err) => { Notify.error(ErrMsg.ERROR_GET_ALL_CUSTOMERS); });

        }
    }
        , [])

    return (
        <div className="CompanyList">
            {(companies?.length > 0)
                ?
                <div className="container">
                    {companies.map((company => <CompanyCard key={company.id} company={company} />))}
                </div>
                :
                <EmptyView msg='Company List is empty' />
            }
        </div>
    );
}
export default CompanyList;