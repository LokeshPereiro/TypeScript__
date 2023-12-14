import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
// import { UseProductsContextType } from "../context/ProductsProvider";
import Product from "./Product";

const ProductList = (): JSX.Element => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  return (
    <main className="main main--products">
      {products?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => {
          const inCart: boolean = cart.some((item) => item.sku === product.sku);

          return (
            <Product
              key={product.sku}
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              inCart={inCart}
            />
          );
        })
      )}
    </main>
  );
};

export default ProductList;
