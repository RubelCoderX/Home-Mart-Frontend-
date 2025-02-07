import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { TProduct } from "@/types";
import productApi from "@/redux/features/product/productApi";
import { toast } from "sonner";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProduct>();
  const [addProduct, { isLoading }] = productApi.useAddProductMutation();

  const onSubmit = (data: TProduct) => {
    data.price = parseFloat(data.price.toString());
    data.stock = parseInt(data.stock.toString());
    data.rating = parseFloat(data.rating.toString());

    addProduct(data)
      .unwrap()
      .then(() => {
        toast.success("Product Created Successfully!", {
          position: "top-center",
        });
        reset(); // Reset the form
      })
      .catch((error) => {
        toast.error(`Failed to create product: ${error.message}`);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-left">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Type product name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm block text-center">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="price" className="text-left">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm block text-center">
                {errors.price.message}
              </span>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="category" className="text-left">
              Category
            </Label>
            <Input
              id="category"
              placeholder="Select category"
              {...register("category", { required: "Category is required" })}
            />
            {errors.category && (
              <span className="text-red-500 text-sm block text-center">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description" className="text-left">
            Product Description
          </Label>
          <Input
            id="description"
            placeholder="Write product description here"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="text-red-500 text-sm block text-center">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="stock" className="text-left">
            Stock
          </Label>
          <Input
            id="stock"
            type="number"
            placeholder="Enter stock quantity"
            {...register("stock", { required: "Stock is required" })}
          />
          {errors.stock && (
            <span className="text-red-500 text-sm block text-center">
              {errors.stock.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="rating" className="text-left">
            Rating
          </Label>
          <Input
            id="rating"
            type="number"
            step="0.1"
            placeholder="Enter product rating"
            {...register("rating")}
          />
          {errors.rating && (
            <span className="text-red-500 text-sm block text-center">
              {errors.rating.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="imageUrl" className="text-left">
            Image URL
          </Label>
          <Input
            id="imageUrl"
            placeholder="Enter image URL"
            {...register("images", { required: "Image URL is required" })}
          />
          {errors.images && (
            <span className="text-red-500 text-sm block text-center">
              {errors.images.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="imageUrl" className="text-left">
            Cloths Size
          </Label>
          <Input
            id="size"
            placeholder="Enter Cloths size"
            {...register("size", { required: "Cloth size is required" })}
          />
          {errors.size && (
            <span className="text-red-500 text-sm block text-center">
              {errors.size.message}
            </span>
          )}
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
