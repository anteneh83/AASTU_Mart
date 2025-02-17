import { useState } from "react";
import Button from "../ui/Button";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    phone: "",
    location: "",
    condition: "new",
    description: "",
    images: [],
  });

  const handleImageUpload = (e) => {
    if (product.images.length >= 3) {
      alert("You can only upload up to 3 images.");
      return;
    }
    const files = Array.from(e.target.files);
    if (files.length + product.images.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setProduct({ ...product, images: [...product.images, ...newImages] });
  };

  const removeImage = (index) => {
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.phone || !product.location) {
      alert("Please fill all required fields!");
      return;
    }
    console.log("Product Submitted:", product);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sell a Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price (in USD)"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setProduct({ ...product, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location (City, State)"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setProduct({ ...product, location: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setProduct({ ...product, condition: e.target.value })}
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <textarea
          placeholder="Additional Details"
          className="w-full p-2 border rounded mb-3"
          rows="3"
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        ></textarea>

        {/* Image Upload Section */}
        <div className="mb-4">
          <label className="block font-semibold">Upload Images (Max 3)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full p-2 border rounded"
            onChange={handleImageUpload}
          />
          <div className="flex mt-2">
            {product.images.map((img, index) => (
              <div key={index} className="relative w-24 h-24 m-1">
                <img src={img} alt="Preview" className="w-full h-full object-cover rounded" />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                  onClick={() => removeImage(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full py-2">Post Product</Button>
      </form>
    </div>
  );
};

export default ProductForm;
