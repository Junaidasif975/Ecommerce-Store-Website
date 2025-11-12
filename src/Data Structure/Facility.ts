import { FaSyncAlt,FaTelegramPlane,FaLifeRing,FaCreditCard, FaLock, FaBlog } from "react-icons/fa";
import type { IconType } from "react-icons";
interface facilityType{
    icon:IconType;
    title:string;
    desc:string;
}

export const facility:facilityType[]=[
    {
        icon:FaSyncAlt,
        title:"Free Return",
        desc:"30 days money back guarantee!"
    },
    {
        icon:FaTelegramPlane,
        title:"Free Shipping",
        desc:"Free shipping on all order"
    },
    {
        icon:FaLifeRing,
        title:"Support 24/7",
        desc:"We support online 24 hrs a day"
    },
    {
        icon:FaCreditCard,
        title:"Receive Gift Card",
        desc:"Recieve gift all over oder $50"
    },
    {
        icon:FaLock,
        title:"Secure Payment",
        desc:"We Value Your Security"
    },
    {
        icon:FaBlog,
        title:"Online Service",
        desc:"Free return products in 30 days"
    },
]