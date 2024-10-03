import React from "react";
import Header from "../Header/Header";
import SideBar from "./Sidebar/SideBar";
//import Main from "../Main/Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddMedicalStaff from "./Pages/AddMedicalStaff";

const MedicalStaff = ({ toggleLoading }) => {
  return (
    <>
      <Header />;
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={<AddMedicalStaff toggleLoading={toggleLoading} />}
        />
      </Routes>
    </>
  );
};

export default MedicalStaff;
