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
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "../context";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [productanme, setProductname] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productbyid, setProductbyid] = useState("");

  const { userinfo } = useAuth();

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
    console.log("Delete", key);
    return new Promise(async (resolve, reject) => {
      try {
        await deleteDoc(doc(db, "products", key));
        resolve();
      } catch (error) {
        console.log(error);
        reject();
      }
    });
  };

  // update------

  const upatePro = (key) => {
    console.log("Delete", key);
    return new Promise(async (resolve, reject) => {
      try {
        await updateDoc(doc(db, "products", key), {
          ...products[key],
          product_name: "update",
          product_price: 366,
        });
        resolve();
      } catch (error) {
        console.log(error);
        reject();
      }
    });
  };

  // update userinfo cart

  const addtocart = (key) => {
    return new Promise(async (resolve, reject) => {
      try {

// finf oduct by key from products database

        const product = await getDoc(doc(db, "products", key)).then((doc) => {
          doc.data();
          console.log('productbyid------>',doc.data());
        }
        );
        



        await getDoc(doc(db, "users", userinfo.email)).then((res) => {
          console.log(res.data().cart);
          const cartdata = res.data().cart;

          // check if exist in cart remove it
          if (cartdata.includes(key)) {
            console.log("exist");
            const newcart = cartdata.filter((item) => item !== key);
            updateDoc(doc(db, "users", userinfo.email), {
              cart: newcart,
            });
          } else {
            console.log("not exist");

            updateDoc(doc(db, "users", userinfo.email), {
              ...userinfo,
              cart: arrayUnion(key),
            });
          }
        });
        console.log("add to cart success");
        resolve();
      } catch (error) {
        console.log(error);
        reject();
      }
    });
  };

  return (
    <div>
      <div>
        <h1>ALl products</h1>
      </div>

      <div className=" flex gap-12 mt-12 ml-12">
        {products.map((product) => (
          <div
            // onClick={() => deletePro(product.id)}
            // onClick={() => upatePro(product.id)}
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

                <div className=" absolute  text-sm top-[-10px] right-[-9px]   font-bold rounded-full  ">
                  <img
                    onClick={() => addtocart(product.id)}
                    className="w-8 h-8 rounded-full  object-cover"
                    src="https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/bag-256.png"
                    alt=""
                  />
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
