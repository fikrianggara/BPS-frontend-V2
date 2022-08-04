import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

const Landing = () => {
  return (
    <>
      <Navbar></Navbar>
      <Alert message="bantu kami untuk lebih baik dalam melayani melalui Survei Kebutuhan Data (SKD 2022) Melalui link s.bps.go.id/oskd22"></Alert>
      <div className="flex">
        <h1 className="m-auto">landing page</h1>
      </div>
    </>
  );
};

export default Landing;
