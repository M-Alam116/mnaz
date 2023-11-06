import { Fragment } from "react";
import Head from "next/head";

function StartSelling() {
  return (
    <Fragment>
      <Head>
        <title>Start Selling on CTD | MNAZ</title>
      </Head>
      <div className="container flex flex-col items-center justify-center py-[2rem]">
        <div className="flex flex-col gap-[1rem] w-full lg:w-[70%] px-[10px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px] font-[600]">START SELLING</h1>
            <p className="text-[18px] font-[500]">Send Us a Request</p>
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

export default StartSelling;
