import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { BreadCrumbs } from "@/components/single-products/BreadCrumbs";
import { FavoriteToggleButton } from "@/components/products/FavoriteToggleButton";
import formatCurrency from "@/utils/format";
import ProductRating from "@/components/single-products/ProductRating";
import AddToCart from "@/components/single-products/AddToCart";

type tParams = Promise<{ id: string }>;

const Product = async (props: { params: tParams }) => {
  const { id } = await props.params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const finalPrice = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt="name"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {finalPrice}
          </p>
          <p className="mt-6 left-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
};

export default Product;
