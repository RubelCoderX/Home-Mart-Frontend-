import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";

import { TProduct } from "@/types";
import productApi from "@/redux/features/product/productApi";
import { toast } from "sonner";

const AddProductModal = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [addProduct, { data, isLoading, isError, isSuccess }] =
    productApi.useAddProductMutation();
  console.log({ data, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct the new product object
    const newProduct: TProduct = {
      name,
      price: parseFloat(price),
      category,
      description,
      stock: parseInt(stock, 10),
      rating: parseFloat(rating),
      images: imageUrl, // Single image URL as a string
    };

    // Dispatch the addProduct action
    addProduct(newProduct);
    toast.success("Product is Created is Successfully!");

    // Clear the form
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setStock("");
    setRating("");
    setImageUrl("");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-primary mb-4 text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300">
            Add New Product
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new product.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="stock" className="text-right">
                Stock
              </Label>
              <Input
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="sm:col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Add Product</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProductModal;
