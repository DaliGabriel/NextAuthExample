"use client"
import { signOut } from "next-auth/react";

function ButtonSignout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="text-white font-bold py-2 px-4 rounded-full"
      style={{backgroundColor: '#ff347d'}}
    >
      Log out
    </button>
  );
}
export default ButtonSignout;
