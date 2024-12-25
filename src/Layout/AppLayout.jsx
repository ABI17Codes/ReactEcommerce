import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AppLayout = () => {
  return (
    <div>
      <main>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
