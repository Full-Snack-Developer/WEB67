import React from "react";
import Image from "next/image";
import RegisterForm from "../components/RigisterForm";
import Login from "../public/Login.jpg";

function RegisterScreen() {
  return (
    <div className="grid grid-cols-5 h-screen bg-gray-200">
      <div className="col-span-2 flex justify-center items-center">
        <RegisterForm />
      </div>
      <div className="col-span-3">
        <Image
          src={Login}
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default RegisterScreen;
