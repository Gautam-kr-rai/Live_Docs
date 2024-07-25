import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUPPage =()=>{
  return (
    <main className="auth-page">

      <SignUp></SignUp>
    </main>
  )
}

export default SignUPPage