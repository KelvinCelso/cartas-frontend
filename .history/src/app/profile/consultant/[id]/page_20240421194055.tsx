import ConsultorProfile from "@/components/Profile/Consultor";
import Footer from "@/components/footer";
import HomeHeader from "@/components/header/HomeHeader";
import Home from "@/components/screens/Home";
import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next";
import { useRouter } from "next/router";
import React from "react";

export const metadata: Metadata = {
  title: "Perfil | Ciganos Encantados",
  description: "Generated by create next app",
};

const page = () => {
  const router = useRouter();
  return (
    <main>
      <HomeHeader />
      <ConsultorProfile user_id={router.query.id} />
      <Footer />
    </main>
  );
};

export default page;
