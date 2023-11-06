import OfferingCard from "@/components/OfferingCard";
import { offeringData } from "../../data/offeringData";
import { Fragment } from "react";
import Head from "next/head";
export default function AvailableOfferings() {
  return (
    <Fragment>
      <Head>
        <title>
          1st and 2nd Trust Deed Investments a vailable in California today |
          MNAZ
        </title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap gap-4 w-full justify-evenly py-[3rem] md:py-[5rem] px-[10px]">
          {offeringData.map((data) => (
            <OfferingCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
