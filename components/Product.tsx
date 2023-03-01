import Image from "next/image";
import { urlFor } from "../sanity";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import { toast } from "react-hot-toast";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} has been added to your basket`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          fill
          style={{ objectFit: "contain" }}
          alt={product.title}
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 ">
          <p className="text-xl text-white md:text-2xl">{product.title}</p>
          <p className="text-lg text-white md:text-xl">{product.price}</p>
        </div>

        <div
          onClick={addItemToBasket}
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}
export default Product;
