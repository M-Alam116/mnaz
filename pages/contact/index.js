import { Fragment } from "react";
import Head from "next/head";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>CrowdTrustDeed in California (949) 438-0591 | MNAZ</title>
      </Head>
      <div className="container py-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div className="flex flex-col gap-[1.5rem] items-center w-full px-[10px]">
          <div className="bg-secondaryColor text-primaryColor py-[5px] px-[20px] rounded-[5px] text-[20px] font-[600] uppercase">
            Covering California
          </div>
          <ul>
            <li className="text-[16px] font-[400]">
              2801 B Street #193, San Diego CA 92102.
            </li>
            <li className="text-[16px] font-[400] text-secondaryColor">
              619-732-6616
            </li>
            <li className="text-[16px] font-[400] text-secondaryColor">
              info@mnaz.com
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[1rem] w-full lg:w-[70%] px-[10px]">
          <div className="bg-secondaryColor text-primaryColor py-[25px] px-[30px] rounded-[5px] text-[20px] font-[600] uppercase">
            Write Us a Message
          </div>
          <form action="" className="flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Name (required)
              </label>
              <input
                type="text"
                required
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Your Email (required)
              </label>
              <input
                type="email"
                required
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Subject
              </label>
              <input
                type="text"
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Your Message
              </label>
              <textarea
                rows={10}
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor resize-none"
              />
            </div>
            <button className="btn">SEND</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
