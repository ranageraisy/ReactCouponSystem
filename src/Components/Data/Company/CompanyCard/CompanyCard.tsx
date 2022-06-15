import { CompanyModel } from "../../../../Models/CompanyModel";
import CustomLink from "../../../Pages/CustomLink/CustomLink";
import "./CompanyCard.css";

interface CompanyCardProps {
    company: CompanyModel;
}

function CompanyCard(props: CompanyCardProps) {
    return (
        <div className="CompanyCard">
            <div>
                <p>id: {props.company.id}</p>
                <p>email: {props.company.email}</p>
                <p>name: {props.company.name}</p>
            </div>
            <div className="links">
                <CustomLink to={`/updateCompany/${props.company.id}`}><button>update company</button></CustomLink>
                <CustomLink to={`/deleteCompany/${props.company.id}`}><button>delete company</button></CustomLink>
            </div>
        </div>
    );
}
export default CompanyCard;