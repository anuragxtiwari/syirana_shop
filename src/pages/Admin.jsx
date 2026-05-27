import { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // add product
  const handleAdd = async () => {
    if (!file) return alert("Select image");

    const imgRef = ref(storage, `products/${file.name}`);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);

    await addDoc(collection(db, "products"), {
      name,
      price,
      image: url
    });

    setName("");
    setPrice("");
    setFile(null);
    fetchProducts();
  };

  // delete product
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* LIST */}
      <div>
        {products.map((p) => (
          <div key={p.id} style={{ marginBottom: "10px" }}>
            <img src={p.image} width="80" />
            <p>{p.name}</p>
            <p>₹{p.price}</p>
            <button onClick={() => handleDelete(p.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}