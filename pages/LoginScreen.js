import React from "react";
import Image from "next/image";
import LoginForm from "../components/LoginForm";
import Login from "../public/Login.jpg";

function LoginScreen() {
  return (
    <div className="grid grid-cols-5 h-screen bg-gray-200">
      <div className="col-span-2 flex justify-center items-center">
        <LoginForm />
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
            // borderRadius: "20px 20px 20px 20px",
          }} // optional
        />
      </div>
    </div>
  );
}

export default LoginScreen;
