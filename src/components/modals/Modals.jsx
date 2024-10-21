import React from "react";
import { useSelector } from "react-redux";
import { selectCreateCustomer } from "../../store/handle/handleSelector";
import CreateCostomer from "./CreateCostomer";

const Modals = () => {
  const createCustomer = useSelector(selectCreateCustomer);
  console.log(createCustomer, "_______createCustomer");
  
  return (
    createCustomer && <CreateCostomer />
  );
};

export default Modals;
