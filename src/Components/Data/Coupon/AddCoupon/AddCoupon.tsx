import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./AddCoupon.css";
import { CouponModel } from "../../../../Models/CouponModel";
import notify, { ErrMsg, SccMsg } from "../../../../services/Notify/Notify";
import { addCoupon } from "../../../../services/Api/CompanyApi";
import { couponAddedAction } from "../../../../Redux/CouponsAppState";
import store from "../../../../Redux/store";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function AddCoupon(): JSX.Element {


    const navigate = useNavigate();

    const schema = yup.object().shape({
        category:
            yup.string()
                .required("please choose category"),

        title:
            yup.string()
                .required("title is required"),

        description:
            yup.string()
                .required("description is required"),

        startDate:
            yup.date()
                .min(new Date(), '!')
                .default(new Date())
                .typeError("You must specify a start date")
                .required("start date is required")
                .nullable().default(() => new Date()),
        endDate:
            yup.date()
                .min(
                    yup.ref('startDate'),
                    "end date can't be before start date")
                .default(new Date())
                .typeError("You must specify a expired Date")
                .required("expired date is required")
                .nullable().default(() => new Date()),
        amount:
            yup.number()
                .moreThan(-1)
                .typeError("You must specify a amount")
                .required("amount is required"),
        price:
            yup.number()
                .moreThan(-1)
                .typeError("You must specify a price")
                .required("price is required"),
    });


    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<CouponModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = async (coupon: CouponModel) => {

        coupon.startDate = new Date(coupon.startDate || new Date);
        coupon.endDate = new Date(coupon.endDate || new Date);

        await addCoupon(1, coupon)
            .then(res => {
                notify.success(SccMsg.ADDED_COUPON);
                store.dispatch(couponAddedAction(res.data));
                navigate('/couponList/');

            })
            .catch(err => {
                notify.error(ErrMsg.ERROR_ADDING_COUPON);
                console.log(ErrMsg.ERROR_ADDING_COUPON);
            });
    }

    return (
        <div className="AddCoupon">
            <h2>Add new Coupon</h2>
            <form onSubmit={handleSubmit(sendToRemote)}>
                <span>{errors.category?.message}</span>
                <br />
                <label htmlFor="category">Coupon category</label>
                <select {...register("category")} id="category" >
                    <option value="" disabled={true} >Choose a category</option>
                    <option value="FOOD" >FOOD</option>
                    <option value="ELECTRICITY">ELECTRICITY</option>
                    <option value="RESTAURANT">RESTAURANT</option>
                    <option value="VACATION">VACATION</option>
                </select>
                <br />
                <span>{errors.title?.message}</span>
                <br />
                <label htmlFor="title">Coupon title</label>
                <input type="text" {...register("title")} placeholder="title" />
                <br />
                <span>{errors.description?.message}</span>
                <br />
                <label htmlFor="description">Add description</label>
                <input type="text" {...register("description")} placeholder="description" />
                <br />
                <label htmlFor="startDate">please insert start date</label>
                <input type="date" {...register("startDate")} placeholder="startDate" />
                <br />
                <span>{errors.startDate?.message}</span>
                <br />
                <label htmlFor="endDate">please insert expired date</label>
                <input type="date" {...register("endDate")} placeholder="endDate" />
                <br />
                <span>{errors.startDate?.message}</span>
                <br />
                <label htmlFor="amount">Coupon amount</label>
                <input type="text" {...register("amount")} placeholder="amount" />
                <br />
                <label htmlFor="price">Coupon price</label>
                <input type="text" {...register("price")} placeholder="price" />
                <br />
                <button className="button-app" disabled={!isValid} type="submit">Add Coupon</button>
            </form>

        </div>
    );
}

export default AddCoupon;
