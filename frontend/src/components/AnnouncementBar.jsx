import { CiDeliveryTruck, CiStar  } from "react-icons/ci";
import { MdAutorenew } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";

const messages = [
    {
        text: "Free Delivery Over Rs. 10,000",
        icon:CiDeliveryTruck,
    },

    {
       text:"New Arrivals Every Week",
       icon:CiStar,
    },
 
    {
        text: "Handloom Sarees",
        icon:GiLargeDress,
    },

    {
        text:"Easy Returns",
        icon: MdAutorenew,
    },
 
  
];



function AnnouncementBar() {
  return (
    <div className=" stikky top-0 overflow-hidden bg-burgundy py-2 text-m text-gold font-bold">

      <div className="flex w-max animate-marquee motion-reduce:animate-none">

        {[...messages, ...messages].map((item, index) =>{

            const Icon = item.icon;

            return (
            <span
            key={index}
            className="mx-8 flex items-center gap-2 whitespace-nowrap"
            >

            <Icon size={20} />
            {item.text} •
            </span>
            );
        })}
        
      </div>
    </div>
  );
}

export default AnnouncementBar;