export default function Home() {
  return (
    <div className="container">
      {/* ========= Hero Section ========= */}
      <div className="heroBg">
        <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[40rem]">
          <p className="text-[18px] font-[500] text-white">
            Find, Pledge and Buy High Yield California Trust Deeds
          </p>
          <div className="flex flex-col sm:flex-row gap-[1rem] mt-4">
            <button className="border-[3px] border-secondaryColor text-[15px] font-[500] py-[5px] px-[10px] text-white">
              How it works
            </button>
            <button className="btn rounded-[5px] text-white">
              Register as an investor
            </button>
          </div>
        </div>
      </div>

      {/* ========= About info ========= */}
      <div className="flex flex-col gap-[10px] py-[3rem] md:py-[5rem] px-[20px] w-full md:w-[90%] mx-auto">
        <h2 className="text-[18px] font-[400] text-justify">
          MNAZ (CTD) provides an online real time marketplace that connects real
          estate lenders with investors and business purpose borrowers.
        </h2>
        <p className="text-[18px] font-[400] text-justify">
          CTD's goal is to offer trust deed investments with the Real Estate as
          collateral and to solve the problem of inefficient, fragmented, and
          opaque real estate lending by using technology, data-driven processes,
          and expert human touch to create transparency with low fees. CTD fills
          the void between slow, over-regulated banks, and hard money lenders
          that cannot supply timely or consistent sources of capital. The
          transparent, simple, and efficient solution allows qualified investors
          to easily build a high yielding Trust Deed Portfolio with steady cash
          flow that diversifies their funds while giving borrowers reliable
          access to capital for a variety of business purpose scenarios.
        </p>
      </div>

      {/* ======= testimonial ========= */}
      <div className="testimonialBg py-[2rem] px-[10px]">
        <h1 className="text-[22px] font-[400] text-primaryColor text-center">
          a few reviews of our platform <br />
          <span className="font-[600] text-[24px]">
            California Investors Feedback
          </span>
        </h1>
        <div className="flex flex-wrap justify-evenly mt-[2rem] gap-[1rem]">
          <div className="flex flex-col w-full max-w-[350px] border-[2px] border-secondaryColor rounded-[5px] p-[1rem]">
            <p className="text-[16px] font-[500] text-primaryColor opacity-80">
              “From the initial offering presentation to the final funding, this
              TD investment was handled very smooth by Mortgage Vintage. I
              appreciate the opportunity to be associated with a true
              professional like Sandy MacDougall. Trust Deed investments are a
              key portion of my financial portfolio.”
            </p>
            <h2 className="text-[20px] font-[600] text-secondaryColor">
              Dan P.
            </h2>
            <span className="text-[16px] font-[500] text-primaryColor opacity-80">
              Mortgage Broker
            </span>
          </div>
          <div className="flex flex-col w-full max-w-[350px] border-[2px] border-secondaryColor rounded-[5px] p-[1rem]">
            <p className="text-[16px] font-[500] text-primaryColor opacity-80">
              “We have worked with Mortgage Vintage, Inc. on a multiple of hard
              money loans over the past few years and I am always impressed with
              the fast, professional service we receive from Mortgage Vintage.
              Whether the loan is a Business Purpose 2nd , a Fix and Flip or a
              Fix and Rent Loan, Sandy always provides fast up front commitments
              and funds on a timely basis.”
            </p>
            <h2 className="text-[20px] font-[600] text-secondaryColor">
              S. Kohn
            </h2>
            <span className="text-[16px] font-[500] text-primaryColor opacity-80">
              National Equity Funding
            </span>
          </div>
          <div className="flex flex-col w-full max-w-[350px] border-[2px] border-secondaryColor rounded-[5px] p-[1rem]">
            <p className="text-[16px] font-[500] text-primaryColor opacity-80">
              “We had tried another private money lender for this Beverly Hills
              1st TD for 30 days and kept getting strung along. The Lender kept
              saying that they had the money, when they did not. My borrower was
              getting anxious and needed the money. I had to act quick and go to
              a Lender that I knew would perform. We had worked with Mortgage
              Vintage before but did not know that they could fund such a large
              loan as $5.6 Mil. Within a few days of our original call, Mortgage
              Vintage visited the property, met the borrower, secured a lender
              and funded the loan. Wow!”
            </p>
            <h2 className="text-[20px] font-[600] text-secondaryColor">
              S. Zodo
            </h2>
            <span className="text-[16px] font-[500] text-primaryColor opacity-80">
              Mortgage Broker
            </span>
          </div>
          <div className="flex flex-col w-full max-w-[350px] border-[2px] border-secondaryColor rounded-[5px] p-[1rem]">
            <p className="text-[16px] font-[500] text-primaryColor opacity-80">
              “We needed a fast foreign national loan and we called Sandy at
              Mortgage Vintage. Sandy and his team quickly provided a quote and
              the underwriting items needed to close. Sandy worked with us while
              the buyer finalized the loan amount and down payment. Mortgage
              Vintage told us what they would do and then they did it. No games,
              no bait and switch, no changes at the last minute. I would highly
              recommend Mortgage Vintage for brokers looking for a hard money
              loan.”
            </p>
            <h2 className="text-[20px] font-[600] text-secondaryColor">
              David Le
            </h2>
            <span className="text-[16px] font-[500] text-primaryColor opacity-80">
              Mortgage Broker
            </span>
          </div>
        </div>
      </div>

      {/* ========= links ======= */}
      <div className="py-[2rem] md:py-[4rem] flex flex-wrap justify-center gap-[2rem] px-[10px]">
        <div className="w-full max-w-[400px] flex flex-col gap-[1rem] items-center justify-center h-[20rem] bg-blueColor rounded-[5px]">
          <h1 className="text-[18px] font-[700] text-primaryColor">
            AVAILABLE OFFERINGS
          </h1>
          <button className="text-[16px] font-[500] border-[2px] text-primaryColor border-secondaryColor p-[15px] rounded-[5px] hover:bg-secondaryColor transition-all duration-300">
            CHECK OFFERINGS
          </button>
        </div>

        <div className="w-full max-w-[400px] flex flex-col gap-[1rem] items-center justify-center h-[20rem] bg-blueColor rounded-[5px]">
          <h1 className="text-[18px] font-[700] text-primaryColor">
            REACH OUT TO US
          </h1>
          <button className="text-[16px] font-[500] border-[2px] text-primaryColor border-secondaryColor p-[15px] rounded-[5px] hover:bg-secondaryColor transition-all duration-300">
            VIEW CONTACT INFO
          </button>
        </div>
      </div>

      {/* ========== contact form ============ */}
      <div className="bg-grayColor py-[2rem] flex flex-col justify-center items-center gap-[2rem] px-[10px] w-full">
        <h1 className="text-[24px] text-black font-[600] text-center ">
          Get in Touch
        </h1>
        <form action="" className="flex flex-col gap-[1rem] w-full md:w-[80%]">
          <input
            type="text"
            placeholder="Your Name"
            className="p-[12px] border-none outline-1 outline-secondaryColor"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-[12px] border-none outline-1 outline-secondaryColor"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-[12px] border-none outline-1 outline-secondaryColor"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="p-[12px] border-none outline-1 outline-secondaryColor"
          />
          <button className="btn w-fit rounded-[5px]">SEND</button>
        </form>
      </div>
    </div>
  );
}
