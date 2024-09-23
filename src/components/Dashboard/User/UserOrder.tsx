import orderApi from "@/redux/features/order/orderApi";
import { TOrder } from "@/types";

const UserOrder = () => {
  const { data: myOrders, isLoading } = orderApi.useGetMyOrderQuery(undefined);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Accessing the orders data
  const orders = myOrders?.data || [];
  console.log(orders);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Image
            </th>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Method
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery Address
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order: TOrder) =>
            order?.items.map((item) => (
              <tr key={item._id} className="bg-white border-b">
                <td className="px-6 py-4">
                  <img
                    src={order.user.photoUrl} // User image
                    alt={order.user.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.user.name} {/* User Name */}
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">Rs. {item.price}</td>
                <td className="px-6 py-4">Rs. {order.totalAmount}</td>
                <td className="px-6 py-4">
                  {order.paymentMethod.replace(/([A-Z])/g, " $1").trim()}
                </td>
                <td className="px-6 py-4">{order.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
