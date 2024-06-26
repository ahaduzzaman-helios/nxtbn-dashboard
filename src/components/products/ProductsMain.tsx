import { Link } from 'react-router-dom';
import { NXPlus, NXProductFilter } from '../../icons';
import ProductList from './ProductList';

function ProductsMain() {
  return (
    <div className="bg-secondary-50 px-10">
      <div className="flex justify-end gap-5 py-5">
        <Link
          to="/products/add-new-product"
          className="bg-primary-500 text-white flex items-center gap-3 px-5 py-2 rounded-lg"
        >
          <NXPlus />
          Add New Product
        </Link>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#9fb0bc]">
          <NXProductFilter />
          Filter
        </button>
      </div>

      <ProductList />
    </div>
  );
}

export default ProductsMain