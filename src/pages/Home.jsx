import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import "../styles/Global.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}
