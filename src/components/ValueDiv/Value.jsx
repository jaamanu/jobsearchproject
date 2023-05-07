import React from "react";
import account from "../../Assets/acc.png";
import pro from "../../Assets/pro.png";
import simple from "../../Assets/simplicity.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and accountable
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={account} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-[18px]"> Accountability</span>
          </div>
          <p className="text-[13px] opacity-[.7] py-[1rem] font-semibold">
            Creativity beautiful simple things are our vision!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-[18px]"> Simplicity</span>
          </div>
          <p className="text-[13px] opacity-[.7] py-[1rem] font-semibold">
            We believe in making things better for everyone just by a little
            bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={pro} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-[18px]"> Professionalism</span>
          </div>
          <p className="text-[13px] opacity-[.7] py-[1rem] font-semibold">
            Creating trust through authenticity and transparency with
            professional conduct.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold"> Ready to switch a career</h1>
          <h2 className="text-textColor text-[25px] font-bold">Let's get Started!</h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
            Get Started.
          </button>
      </div>
    </div>
  );
};

export default Value;
