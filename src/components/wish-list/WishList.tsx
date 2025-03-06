import classes from './wish-list.module.css';

interface IProps {
  wishList: Array<number>;
  productList: Store.IProduct[];
  onRemove: (id: number) => void;
}

const WishList = (props: IProps) => {
  const wishListItems = props.productList.filter(p => props.wishList.includes(p.id));

  return (
    <div className={classes.wishList}>
      <b>Wish List:</b>
      {
        Boolean(wishListItems.length)
          ? <ul>
            {
              wishListItems.map(item => (
                <li key={item.id}>
                  {item.name}
                  <span className={classes.remove} onClick={() => props.onRemove(item.id)}>❌</span>
                </li>
              ))
            }
          </ul>
          : ' No items added to your wish list!'
      }
    </div>
  )
}

export default WishList;