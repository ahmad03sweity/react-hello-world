import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import ProductsList from './components/products-list/ProductsList';
import { useState } from 'react';

const PRODUCTS_LIST: Store.IProduct[] = [
  {
    id: 156,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S436e24889ca4485cb547c1f416a9d838l.jpg_960x960q75.jpg",
    wishListCounter: 120,
    desc: "High-quality wireless headphones with noise cancellation.",
    inStock: true
  },
  {
    id: 6542,
    name: "Smartphone Stand",
    price: 14.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S33be83f0acac40f3858d701a348b4d09h.jpeg_960x960q75.jpeg",
    wishListCounter: 85,
    desc: "Adjustable and foldable stand for smartphones and tablets.",
    inStock: true
  },
  {
    id: 4513,
    name: "Gaming Mouse",
    price: 39.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/Sa51bd6cd9ef8436a8604b36c880bb079x.jpg_960x960q75.jpg",
    wishListCounter: 200,
    desc: "Ergonomic gaming mouse with customizable RGB lighting.",
    inStock: true
  },
  {
    id: 478,
    name: "Mechanical Keyboard",
    price: 89.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S06e91bb1fe354af5bb1bf39ee875d8ccX.jpg_960x960q75.jpg",
    wishListCounter: 150,
    desc: "RGB mechanical keyboard with blue switches and full key rollover.",
    inStock: true
  },
  {
    id: 515,
    name: "Fitness Smartwatch",
    price: 129.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S29dca108b0044589baf94d040ced4538x/1080P-Outdoor-Action-Camera-Motorcycle-Bike-Helmet-Camera-Mini-Camera-Sport-DV-Video-Recorder-Action-Cam.jpg_350x350xz.jpg",
    wishListCounter: 180,
    desc: "Water-resistant smartwatch with heart rate monitoring.",
    inStock: true
  },
  {
    id: 698,
    name: "Portable Power Bank",
    price: 29.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S3558c07dd58043b8b111d35fa68ebc58p/Ulanzi-VL49-RGB-Pro-Colorful-Ambience-Video-Light-Fill-Light-Portable-for-Camera-Smartphone-Video-Vlog.jpg_350x350xz.jpg",
    wishListCounter: 95,
    desc: "Fast-charging 10,000mAh power bank with dual USB ports.",
    inStock: true
  },
  {
    id: 7156,
    name: "Wireless Earbuds",
    price: 49.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S1f8f6e467e7545ff8b58e70f81713723X/New-Bee-B41-Wireless-Bluetooth-5-0-Earphones-Hands-Free-Mini-Headset-22H-Music-Playing-Earpieces.jpg_350x350xz.jpg",
    wishListCounter: 220,
    desc: "True wireless earbuds with deep bass and long battery life.",
    inStock: true
  },
  {
    id: 8186,
    name: "4K Action Camera",
    price: 159.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S11d1cdc265654ef6b2e00a58c701a53f5/RISESPRAY-35mm-F1-6-Manual-Focus-MF-Prime-camera-Lens-for-Canon-EOSM-Nikon-N1-Fuji.jpg_350x350xz.jpg",
    wishListCounter: 130,
    desc: "Waterproof 4K action camera with wide-angle lens.",
    inStock: true
  },
  {
    id: 8499,
    name: "Laptop Cooling Pad",
    price: 24.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S1643ebefb1034126b6d4f9f9db584171o/GAINVANE-Background-for-Photography-Photo-Booth-Backdrop-for-Photoshoot-Background-Green-Screen-Video-Recording-Parties-Curtain.png_350x350xz.png",
    wishListCounter: 70,
    desc: "Silent cooling pad with adjustable fan speeds.",
    inStock: true
  },
  {
    id: 4510,
    name: "Smart LED Light Bulb",
    price: 19.99,
    imageURL: "https://ae-pic-a1.aliexpress-media.com/kf/S61ff029a5fdb4021b1ab822e617e068ff/Ulanzi-VL120-RGB-Camera-Video-Light-Mini-Portable-3100mAh-Photography-Lighting-Smartphone-Vlog-Fill-Light-RGB.jpg_350x350xz.jpg",
    wishListCounter: 105,
    desc: "WiFi-enabled smart bulb with app and voice control.",
    inStock: true
  },
];

function App() {
  const [pList, setPList] = useState(PRODUCTS_LIST);
  const [wishList, setWishList] = useState<Store.IProduct[]>([]);

  const handleAddToWishList = (id: number) => {
    const newPList = pList.map((prod) =>
      prod.id === id ? { ...prod, wishListCounter: prod.wishListCounter + 1 } : prod
    );
    setPList(newPList);

    const product = pList.find((prod) => prod.id === id);
    if (product && !wishList.some((item) => item.id === id)) {
      setWishList([...wishList, product]); 
    }
  };
  const handleDeleteProduct = (index: number) => {
    const newPList = pList.filter((_, i) => i !== index); 
    setPList(newPList);
  };

  return (
    <div>
      <Header productsCount={pList.length} />
      <Categories />
      <ProductsList data={pList} onWish={handleAddToWishList} onDelete={handleDeleteProduct}/>
      <div className="wishlist">
          <h2>Wishlist ❤️</h2>
          {wishList.length === 0 ? (
            <p>No items in wishlist</p>
          ) : (
            wishList.map((product) => (
              <div key={product.id} className="wishlist-item">
                <img src={product.imageURL} alt={product.name} width={50} height={50} />
                <p>{product.name}</p>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default App;