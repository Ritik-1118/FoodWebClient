import React, { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { Navigate } from "react-router-dom";
import Loader from "../../shared/loader.";
const Profile = () => {
  const { userData, isLoading, user, islogin } = useAuth();

  // Destructure userData safely
  const { userdata, payments } = userData || {};
  const { username, email } = userdata || {};

  useEffect(() => {
    // Store user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]); // Update local storage whenever userData changes

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (!islogin) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="py-3 px-4 sm:px-6 bg-gray-300 bg-opacity-30 lg:px-6">
      <div className="container w-[24rem]   m-auto items-center py-[14vh]">
        <form className=" gap-3 m-auto content-center flex flex-col justify-center">
          <div className="items-start gap-16 justify-between flex ">
            <span className="justify-start font-semibold">User Name</span>{" "}
            <input
              className="p-1 rounded-lg bg-gray-400/15 cursor-not-allowed"
              placeholder={username || ""}
            />
          </div>
          <div className="items-start gap-16 justify-between flexjustify-between flex ">
            <span className="justify-start font-semibold">Email</span>
            <input
              className="p-1 rounded-lg bg-gray-400/15 cursor-not-allowed"
              placeholder={email || ""}
            />
          </div>
          <div>
            {payments.length > 0 ? (
              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  {" "}
                  <thead>
                    <tr>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Transaction Id
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount &#36;
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={index}>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {payment.razorpay_payment_id || ""}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                         &#36; {payment.amount || ""}
                        </td>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {payment.status || ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex justify-center">
                No transactions available
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
