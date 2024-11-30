import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async (
  props: {
    searchParams: Promise<{ layout?: string; search?: string }>;
  }
) => {
  const searchParams = await props.searchParams;
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
