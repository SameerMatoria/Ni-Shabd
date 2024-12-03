import { useState } from "react";
import "./App.css";
import MainPanel from "./pages/MainPanel";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar /> {/* Keep Navbar outside of the sidebar flow */}
        <div className="flex">
          {/* <AppSidebar /> */}
          <main className="flex-grow w-screen ">
            {/* <SidebarTrigger /> */}
            <MainPanel />
            {/* <AdminPanel /> */}
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}

export default App;
