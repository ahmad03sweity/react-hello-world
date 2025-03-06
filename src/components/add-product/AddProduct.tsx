import React, { useState } from "react";
import classes from "./add-product.module.css";
import classNames from "classnames";
import validator from "validator";

interface IProps {
  onAdd: (product: Store.IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const [visible, setVisible] = useState(true);

  interface IForm {
    name: string;
    price: number;
    imageURL: string;
    desc: string;
    inStock: boolean;
  }

  const INITIAL_FORM: IForm = {
    name: "",
    price: 0,
    imageURL: "",
    desc: "",
    inStock: true,
  };

  const [form, setForm] = useState<IForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<{ key: string; error: string }[]>([]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value: any = e.target.value;
    let key = e.target.name;
    const errores: { key: string; error: string }[] = [...errors].filter(err => err.key !== key);

if (key === "name" && value.length <= 3) 
  errores.push({ key: "name", error: "Product name must be at least 3 characters long" });

if (key === "price" && Number(value) <= 0) 
  errores.push({ key: "price", error: "Product price must be a positive number" });

if (key === "imageURL" && !validator.isURL(value)) 
  errores.push({ key: "imageURL", error: "Product image URL is invalid" });

setErrors(errores);

    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProduct: Store.IProduct = {
      id: Date.now(),
      wishListCounter: 0,
      name: (e.target as any)["name"].value,
      price: (e.target as any)["price"].value,
      imageURL: (e.target as any)["imageURL"].value,
      desc: (e.target as any)["desc"].value,
      inStock: (e.target as any)["inStock"].value,

      // ...form,
    };
    props.onAdd(newProduct);
    handleReset();
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors([]);
  };

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Add Product</button>

      <form className={classNames(classes.container, visible && classes.visible)}>
        <h2 className={classes.title}>Add New Product</h2>
        <p className={classes.subtitle}>
          Please fill all the required product details
        </p>

        {/* Product Name */}
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pName">
            Product Name:
          </label>
          <input
            className={classes.input}
            id="pName"
            name="name"
            value={form.name}
            onChange={handleFormChange}
          />
          <span className={classes.errors}>
            {errors.find((error) => error.key === "name")?.error}
          </span>
        </div>

        {/* Product Price */}
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pPrice">
            Product Price:
          </label>
          <input
            className={classes.input}
            id="pPrice"
            name="price"
            type="number"
            value={form.price}
            onChange={handleFormChange}
          />
          <span className={classes.priceDetails}>
            <b>With discount:</b> {(form.price ?? 0) * 0.8}
          </span>
          <span className={classes.errors}>
            {errors.find((error) => error.key === "price")?.error}
          </span>
        </div>

        {/* Product Image URL */}
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pImage">
            Product Image URL:
          </label>
          <input
            className={classes.input}
            id="pImage"
            name="imageURL"
            value={form.imageURL}
            onChange={handleFormChange}
          />
          <span className={classes.errors}>
            {errors.find((error) => error.key === "imageURL")?.error}
          </span>
        </div>

        {/* Product Description */}
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pDesc">
            Product Description:
          </label>
          <textarea
            className={classes.textarea}
            id="pDesc"
            name="desc"
            value={form.desc}
            onChange={handleFormChange}
          />
        </div>

        {/* Buttons */}
        <div className={classes.buttonGroup}>
          <button type="submit" className={classes.button} onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className={classes.button} onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default AddProduct;
