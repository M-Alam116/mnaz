import OfferingCard from "@/components/OfferingCard";
import { paidOfferings } from "../../data/offeringData";
import { useState, Fragment } from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const positions = ["1st", "2nd", "3rd"];
const properties = [
  "Affordable Housing",
  "Commercial",
  "Condo",
  "Duplex",
  "Hotel",
  "Industial",
  "Land",
  "Mixed Use",
  "Multi Family",
  "Office",
  "Residential Manufactured Home",
  "Residential Townhouse",
  "Retail",
  "Single Family Res",
  "Special Purpose",
  "Student Housing",
  "Tri-plex",
  "Other",
];
const yieldData = ["<8.00%", "8.10% - 10.00%", "10.10% - 12.00%", "14.00%+"];
const amount = ["<= $100k", "$101k - $250k", "$251k - $500k", "$501k - $1000$"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function PaidOfferings() {
  const theme = useTheme();
  const [lienPosition, setLienPosition] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [yields, setYields] = useState([]);
  const [loanAmount, setLoanAmount] = useState([]);

  const handlePositionChange = (event) => {
    const {
      target: { value },
    } = event;
    setLienPosition(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleYieldChange = (event) => {
    const {
      target: { value },
    } = event;
    setYields(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleLoanChange = (event) => {
    const {
      target: { value },
    } = event;
    setLoanAmount(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handlePropertyChange = (event) => {
    const {
      target: { value },
    } = event;
    setPropertyType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Fragment>
      <Head>
        <title>Paid Offerings | MNAZ</title>
      </Head>
      <div className="container py-[3rem] md:py-[5rem] px-[10px]">
        <form className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {/* =========== position ============== */}
          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="position">Lien position</InputLabel>
              <Select
                labelId="position"
                id="positionId"
                multiple
                value={lienPosition}
                onChange={handlePositionChange}
                input={<OutlinedInput id="positionId" label="Lien position" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {positions.map((position) => (
                  <MenuItem
                    key={position}
                    value={position}
                    style={getStyles(position, lienPosition, theme)}
                  >
                    {position}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* ============= property ========= */}
          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="property">Property type</InputLabel>
              <Select
                labelId="property"
                id="propertyId"
                multiple
                value={propertyType}
                onChange={handlePropertyChange}
                input={<OutlinedInput id="propertyId" label="Property type" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {properties.map((property) => (
                  <MenuItem
                    key={property}
                    value={property}
                    style={getStyles(property, propertyType, theme)}
                  >
                    {property}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* ========= yield ========= */}
          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="Yield">Yield</InputLabel>
              <Select
                labelId="Yield"
                id="YieldId"
                multiple
                value={yields}
                onChange={handleYieldChange}
                input={<OutlinedInput id="YieldId" label="Yield" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {yieldData.map((data) => (
                  <MenuItem
                    key={data}
                    value={data}
                    style={getStyles(data, propertyType, theme)}
                  >
                    {data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* =========== amount =========== */}
          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="loan">loan Amount</InputLabel>
              <Select
                labelId="loan"
                id="loanId"
                multiple
                value={loanAmount}
                onChange={handleLoanChange}
                input={<OutlinedInput id="loanId" label="loan Amount" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {amount.map((data) => (
                  <MenuItem
                    key={data}
                    value={data}
                    style={getStyles(data, propertyType, theme)}
                  >
                    {data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <button className="btn rounded-[5px] w-[200px] sm:w-fit h-fit py-[13px]">
            FILTER
          </button>
        </form>
        <div className="flex flex-wrap gap-4 w-full justify-evenly">
          {paidOfferings.map((data) => (
            <OfferingCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
