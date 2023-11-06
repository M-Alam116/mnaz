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
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.780570527191!2d-117.87573152578918!3d33.61099744090306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce0893bbcb4c9%3A0xc5618041f6c6998a!2sCrowdTrustDeed!5e0!3m2!1sen!2s!4v1699279281168!5m2!1sen!2s"
              width="350"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ul>
            <li className="text-[16px] font-[400]">
              2801 B Street #193, San Diego CA 92102.
            </li>
            <li className="text-[16px] font-[400] text-secondaryColor">
              (310) 494-6629
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
