import React from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import Postbox from "./Components/Postbox";

const HomePage = () => {
  return (
    <ContainerLayout>
      <Postbox />
    </ContainerLayout>
  );
};

export default HomePage;
