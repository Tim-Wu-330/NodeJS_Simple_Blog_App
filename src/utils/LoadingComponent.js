import React from "react";
import { css } from "@emotion/react";
// import RiseLoader from "react-spinners/CircleLoader";
import BarLoader from "react-spinners/BarLoader";

//css
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: yellow;
// `;
const LoadingComponent = () => {
  // return <RiseLoader color="yellow" loading={true} css={override} />;
  return <BarLoader color="yellow" loading={true} />;
};

export default LoadingComponent;
