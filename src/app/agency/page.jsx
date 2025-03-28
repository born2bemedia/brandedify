import React from "react";
import "@/styles/agency.scss";
import AgencyBlock from "./_component/AgencyBlock";
import JobPopup from "@/components/JobPopup";

export const metadata = {
  title: "About Brandedify | Your Trusted Digital Marketing Agency",
  description:
    "Discover Brandedify, a dynamic digital marketing agency specializing in creative strategies, data-driven solutions, and exceptional results for brands of all sizes.",
  openGraph: {
    title: "About Brandedify | Your Trusted Digital Marketing Agency",
    description:
      "Discover Brandedify, a dynamic digital marketing agency specializing in creative strategies, data-driven solutions, and exceptional results for brands of all sizes.",
    images: "https://brandedify.com/images/meta.png",
  },
};

const Agency = () => {
  return (
    <>
      <AgencyBlock />
      <JobPopup />
    </>
  );
};

export default Agency;
