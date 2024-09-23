/* eslint-disable @typescript-eslint/no-explicit-any */
import orderApi from "@/redux/features/order/orderApi";
import productApi from "@/redux/features/product/productApi";
import { TOrder } from "@/types";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data: product } = productApi.useGetAllProductsQuery({});
  const totalProducts = product?.data?.length;
  const { data: order } = orderApi.useGetAllOrdersQuery(undefined);
  const totalOrders = order?.data.length;

  // Calculate total sales
  const totalSales = order?.data
    .reduce((acc: any, curr: any) => {
      return acc + parseFloat(curr.totalAmount);
    }, 0)
    .toFixed(2); // Ensure it's formatted to two decimal points

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <span>
        <Link
          to="/"
          className="text-blue-600 hover:text-red-600 hover:underline"
        >
          Switch To Home
        </Link>
      </span>
      <h2 className="text-2xl font-bold mb-4 mt-6">Seller Dashboard</h2>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto max-h-[50vh]">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold">Rs. {totalSales || "0.00"}</p>{" "}
          {/* Display totalSales */}
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <p className="text-3xl font-bold">{totalProducts}</p>
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
              {order?.data.map((orderItem: TOrder) => (
                <tr key={orderItem._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {orderItem._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {orderItem.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. {orderItem.totalAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
