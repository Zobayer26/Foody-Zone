import { Currency } from "@/utility/Currency";
import Image from "next/image";

type singleItemprops = {
    id: number,
    name: string,
    price: number,
    img: string
}
const SingleItem = ({ id, name, price, img }: singleItemprops) => {
    return (
        <div className="w-80 pt-2 flex rounded gap-1 bg-slate-700 items-center text-white shadow-md">
            <div>
                <Image src={img} alt={name} width={400} height={100} />
            </div>
            <div>
                <div>
                    <h1>{name}</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.
                        Odio elementum in neque cras eget est. </p>
                </div>
                <div className="flex justify-end mb-2 mr-4">
                    <h2 className=" w-16 text-center bg-red-500 rounded p-2   ">
                        {Currency(price)}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;