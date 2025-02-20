import Product from '../product/Product';
import './products-list.css';

interface IProps {
  data: Store.IProduct[];
  onWish: (id: number) => void;
  onDelete: (index: number) => void;
}

const ProductsList = (props: IProps) => {
  return (
    <div className="products-list">
      {
        props.data.map((product, index) => (
          <Product
            key={product.id}
            data={product}
            index={index}
            onWish={props.onWish}
            onDelete={props.onDelete}
          />
        ))
      }
    </div>
  )
}

export default ProductsList