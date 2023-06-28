import React from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import Postbox from "./Components/Postbox";
import AllPostsection from "./Components/AllPostsection";

const HomePage = () => {
  return (
    <ContainerLayout>
      <Postbox />
      <AllPostsection/>
    </ContainerLayout>
  );
};

export default HomePage;
