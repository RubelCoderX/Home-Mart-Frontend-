import userApi from "@/redux/features/user/userApi";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const { data: profileData } = userApi.useGetMeQuery(undefined);
  const userData = profileData?.data;

  return (
    <>
      <div className="bg-gray-800 p-8 mb-10 rounded-lg shadow-md">
        {/* Welcome Section */}
        <h2 className="text-4xl font-bold text-center text-white">
          Welcome Back,{" "}
          <span className="text-yellow-300">{userData?.name}</span>!
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center">
        {/* User Profile Card */}
        <div className="relative bg-white w-[800px] shadow-lg rounded-lg p-8 transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1 max-w-lg">
          <div className="flex justify-center cursor-pointer">
            <Link to="/dashboard/profile-update" className="relative">
              {/* Profile Image */}
              <img
                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                src={userData?.photoUrl || "/default-profile.png"}
                alt={userData?.name || "Profile Image"}
              />
              {/* Edit Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-full">
                <FaEdit className="text-3xl text-white" />
              </div>
            </Link>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              {userData?.name || "User Name"}
            </h2>
            <div className="mt-2 text-gray-600">
              <span className="px-4 py-1 bg-gray-200 rounded-lg uppercase">
                {userData?.role || "Role Not Defined"}
              </span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>
              <span className="font-semibold">Mobile: </span>
              {userData?.phone || "N/A"}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Email: </span>
              {userData?.email || "N/A"}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Address : </span>
              {userData?.address || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
