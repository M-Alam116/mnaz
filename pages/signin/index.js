import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function SignIn() {
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container py-[2rem] px-[10px]">
      <div className="w-full md:w-[80%] flex flex-col mx-auto">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[16px] font-[400]">Connect using</p>
          <div className="bg-secondaryColor flex gap-[1rem] items-center p-[12px] cursor-pointer">
            <FaFacebookF className="w-[25px] h-[25px] text-primaryColor" />
            <p className="text-[18px] font-[500] text-primaryColor">Facebook</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] my-[2rem]">
          <p className="text-[16px] font-[400]">
            Or login with your email and password
          </p>
          <hr className="w-full h-[2px] bg-grayColor" />
        </div>
        <form action="" className="w-full grid grid-cols-1 gap-[1.5rem]">
          <input
            type="email"
            required
            placeholder="Please enter your email here"
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

          <button className="btn uppercase">login</button>
        </form>
        <Link href="/sign-up">
          <p className="text-[16px] font-[500] text-secondaryColor mt-[2rem]">
            Don't have an account? Click here to Sign Up!
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
