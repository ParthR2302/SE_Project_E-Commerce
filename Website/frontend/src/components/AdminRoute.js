import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Store";

export default function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log("Hello m");
  return userInfo && userInfo.isAdmin ? children : <Navigate to='/signin' />;
}
