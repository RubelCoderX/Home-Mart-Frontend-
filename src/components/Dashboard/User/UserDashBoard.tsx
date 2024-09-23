import orderApi from "@/redux/features/order/orderApi";
import { TOrder } from "@/types";

const UserDashBoard = () => {
  const { data: myOrders, isLoading } = orderApi.useGetMyOrderQuery(undefined);

  console.log(myOrders);
  const orderItems = myOrders?.data || []; // Safely access order items
  const totalOrders = orderItems.length; // Get total orders
  console.log(totalOrders);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 mt-6">User Dashboard</h2>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto max-h-[50vh]">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total My Orders</h3>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto max-h-[30vh]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderItems?.flatMap((order: TOrder) =>
                order.items.map((item) => (
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
