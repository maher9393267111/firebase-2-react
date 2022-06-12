import React from "react";
import { useEffect, useState } from "react";
import { db, app, storage } from "../firebase/index";
import {
  setDoc,
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [productanme, setProductname] = useState("");
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      let productsfetch = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsfetch);
      console.log(productsfetch);
    });
  }, []);

 

  const deletePro = (key) => {
    console.log("Delete", key)
    return new Promise(async (resolve, reject) => {

        try {
            await deleteDoc(doc(db, "products", key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}




// update------


const upatePro = (key) => {
    console.log("Delete", key)
    return new Promise(async (resolve, reject) => {

        try {
            await updateDoc(doc(db, "products", key), {
              ...products[key],
                product_name: "update",
                product_price: 366,
            })
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}








  return (
    <div>
      <div>
        <h1>ALl products</h1>
      </div>

      <div className=" flex gap-12 mt-12 ml-12">
        {products.map((product) => (
          <div
            // onClick={() => deletePro(product.id)}
            onClick={() => upatePro(product.id)}
            className=" 


border-2 border-gray-500  shadow-lg  pb-12 pl-6 pr-6"
          >
            <div className="mt-4">
              <div className=" relative">
                <img
                  className=" w-24 h-24  rounded-full  object-cover"
                  src={product.product_image}
                  alt=""
                />

                <div className=" absolute  text-2xl top-[-10px] right-[-9px]   font-bold rounded-full  ">
                  x
                </div>
              </div>

              <div className="mt-4 font-bold">
                <h1>{product.product_name}</h1>
                <h1>{product?.product_price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
