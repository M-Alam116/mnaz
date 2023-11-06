import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Fragment } from "react";
import Head from "next/head";

function Signup() {
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Fragment>
      <Head>
        <title>Sign Up | MNAZ</title>
      </Head>
      <div className="container py-[3rem] px-[10px]">
        <div className="w-full md:w-[80%] flex flex-col mx-auto">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] font-[400]">Connect using</p>
            <div className="bg-secondaryColor flex gap-[1rem] items-center p-[12px] cursor-pointer">
              <FaFacebookF className="w-[25px] h-[25px] text-primaryColor" />
              <p className="text-[18px] font-[500] text-primaryColor">
                Facebook
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] my-[2rem]">
            <p className="text-[16px] font-[400]">
              Or login with your email and password
            </p>
            <hr className="w-full h-[2px] bg-grayColor" />
          </div>
          <form action="" className="w-full grid grid-cols-1 gap-[1.5rem]">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
              <input
                type="text"
                required
                placeholder="First Name"
                className="p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Please enter your email here"
              className="p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
            />
            <div className="w-full relative flex items-center">
              <input
                type={showPassword ? "password" : "text"}
                required
                placeholder="Password"
                className="w-full p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={togglePassword}
              >
                {showPassword ? "Show" : "Hide"}
              </span>
            </div>
            <div className="w-full relative flex items-center">
              <input
                type={showConfirmPassword ? "password" : "text"}
                required
                placeholder="Confirm Password"
                className="w-full p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={toggleConfirmPassword}
              >
                {showConfirmPassword ? "Show" : "Hide"}
              </span>
            </div>
            <div className="">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="role-user">Role</InputLabel>
                  <Select
                    labelId="role-user"
                    id="user-role"
                    value={role}
                    label="role"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Visitor"}>Visitor</MenuItem>
                    <MenuItem value={"Lendor"}>Lendor</MenuItem>
                    <MenuItem value={"Broker"}>Broker</MenuItem>
                    <MenuItem value={"Invester"}>Invester</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="border-[2px] border-grayColor w-[15px] h-[15px]"
                id="check"
              />
              <label htmlFor="check">
                I agree to the{" "}
                <Link href="/sign-up" className="text-secondaryColor">
                  Terms of Use
                </Link>
              </label>
            </div>
            <button className="btn uppercase">create account</button>
          </form>
          <Link href="/signin">
            <p className="text-[16px] font-[500] text-secondaryColor mt-[2rem]">
              Already have an account? Click here to Sign In!
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
