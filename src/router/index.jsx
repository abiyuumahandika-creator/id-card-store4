import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChooseType from "../pages/ChooseType";
import Templates from "../pages/Templates";
import StandardOrder from "../pages/StandardOrder";
import OrganizationOrder from "../pages/OrganizationOrder";
import CustomOrder from "../pages/CustomOrder";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import OrderStatus from "../pages/OrderStatus";
import AdminLayout from "../components/admin/AdminLayout";
import AdminLogin from "../pages/admin/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminOrders from "../pages/admin/Orders";
import AdminPricing from "../pages/admin/Pricing";

function AppRouter() {
  return <BrowserRouter basename="/id-card-store4"><Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/pilih-tipe" element={<ChooseType />} />
    <Route path="/templates" element={<Templates />} />
    <Route path="/order/standard" element={<StandardOrder />} />
    <Route path="/order/organization" element={<OrganizationOrder />} />
    <Route path="/custom" element={<CustomOrder />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment/:orderId" element={<Payment />} />
    <Route path="/order/:orderId" element={<OrderStatus />} />
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="orders" element={<AdminOrders />} />
      <Route path="pricing" element={<AdminPricing />} />
    </Route>
    <Route path="*" element={<main className="page-shell"><h1>Halaman tidak ditemukan</h1><a href="/">Kembali ke beranda</a></main>} />
  </Routes></BrowserRouter>;
}
export default AppRouter;
