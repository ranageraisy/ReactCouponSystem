import { useEffect, useState } from "react";
import { CustomerModel } from "../../../../Models/CustomerModel";
import { getAllCustomers } from "../../../../services/Api/AdminApi";
import Notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import EmptyView from "../../../Pages/EmptyView/EmptyView";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./CustomerList.css";

function CustomerList(): JSX.Element {

    const [customers, setCustomer] = useState<CustomerModel[]>([])

    useEffect(() => {
        getAllCustomers().then((res) => {
            setCustomer(res.data)

            Notify.success(SccMsg.GET_ALL_CUSTOMERS)
        })
            .catch((err) => { Notify.error(ErrMsg.ERROR_GET_ALL_CUSTOMERS) })

    }, [])


    return (
        <div className="CustomerList">
            {(customers?.length > 0)
                ?
                <div className="container">
                    {customers.map((customer => <CustomerCard key={customer.id} customer={customer} />))}
                </div>
                :
                <EmptyView msg='Customer List is empty' />
            }

        </div>
    );
}

export default CustomerList;
