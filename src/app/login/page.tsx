import Login from "@/pages/auth/Login";
import React, { Suspense } from "react";

export default function LoginPage() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Login />
      </Suspense>
    </div>
  );
}
