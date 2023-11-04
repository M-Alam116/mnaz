import OfferingCard from "@/components/OfferingCard";
import { offeringData } from "../../data/offeringData";
export default function AvailableOfferings() {
  return (
    <div className="container">
      <div className="flex flex-wrap gap-4 w-full justify-evenly py-[3rem] md:py-[5rem] px-[10px]">
        {offeringData.map((data) => (
          <OfferingCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
