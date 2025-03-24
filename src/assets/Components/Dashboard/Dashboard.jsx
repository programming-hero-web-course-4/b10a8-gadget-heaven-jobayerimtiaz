import { useLocation, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div>
      <div className="bg-[#9538E2] pb-8 pt-8 text-center text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base font-normal py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="flex gap-6 mt-6 justify-center items-center">
          <Link
            to="cart"
            className={`text-lg font-extrabold btn btn-soft border-none rounded-3xl px-8 ${
              location.pathname.endsWith("/cart") ||
              location.pathname.endsWith("dashboard")
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Cart
          </Link>

          <Link
            to="wishlist"
            className={`text-lg font-extrabold btn btn-soft border-none rounded-3xl px-8 ${
              location.pathname.endsWith("/wishlist")
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Wishlist
          </Link>
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
