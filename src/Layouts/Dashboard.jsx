import { FaHome } from "react-icons/fa";
import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaList,
  FaRegMessage,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { LuListChecks } from "react-icons/lu";

const Dashboard = () => {
  const [cart] = useCart();

  //  get isAdmin value from database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              {/* admin dashboard */}
              <li>
                <NavLink to="/dashboard/adminHome" className="uppercase">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems" className="uppercase">
                  <FaUtensils />
                  Add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems" className="uppercase">
                  <FaList />
                  Manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings" className="uppercase">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/allUsers">
                  <FaUsers />
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* user dashboard */}
              <li>
                <NavLink to="/dashboard/userHome" className="uppercase">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment" className="uppercase">
                  <FaWallet />
                  payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory" className="uppercase">
                  <LuListChecks />
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="uppercase">
                  <FaCartShopping />
                  My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/review">
                  <FaRegMessage />
                  Add review
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/review">
                  <FaList />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="uppercase">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="uppercase">
              <IoMdMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="uppercase">
              <HiShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="uppercase">
              <MdPermContactCalendar />
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
