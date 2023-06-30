import React, { useContext } from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import Postbox from "./Components/Postbox";
import AllPostsection from "./Components/AllPostsection";
import { Authcontext } from "../AuthLayout/AuthLayout";

const HomePage = () => {
  const {loading} = useContext(Authcontext);
  if(loading){
    return;
  }

  return (
    <ContainerLayout>
      <Postbox />
      <AllPostsection/>
    </ContainerLayout>
  );
};

export default HomePage;
