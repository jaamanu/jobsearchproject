import React from "react";

// Imported icons //
import { BiTimeFive } from "react-icons/bi";

// imported Images //
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.jpeg";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";

// for all jobs to be in an ARRAY using method call MAP......//
// the ARRAY will be named as Data........//

const Jobs = () => {
  const Data = [
    {
      id: 1,
      image: logo1,
      title: "Web Developer",
      time: "Now",
      location: "South Africa",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Netflix Co.",
    },
    {
      id: 2,
      image: logo2,
      title: "Software Eng.",
      time: "14hrs",
      location: "USA",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Microsoft",
    },
    {
      id: 3,
      image: logo3,
      title: "Code Reviewer",
      time: "10hrs",
      location: "Remote",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Microverse",
    },
    {
      id: 4,
      image: logo4,
      title: "Data Scientist",
      time: "Now",
      location: "Norway",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Tesla Co.",
    },
    {
      id: 5,
      image: logo5,
      title: "Cyber Security",
      time: "17HRS",
      location: "USA",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Apple Co.",
    },
    {
      id: 6,
      image: logo6,
      title: "React Developer",
      time: "2hrs",
      location: "Turkey",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Twitch Co.",
    },
    {
      id: 7,
      image: logo7,
      title: "Senior Developer",
      time: "7days",
      location: "Canada",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Google",
    },
    {
      id: 8,
      image: logo8,
      title: "Product Designer",
      time: "24hrs",
      location: "Ghana",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio nemo soluta maiores dolore voluptatibus sit? Vero quasi illo!",
      company: "Accenture.",
    },
  ];

// above is a single company and now to be map in the const of Jobs below //
// add more data objects as needed


let count = 0;


  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company,}) => (
          <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-1g shadow-greyIsh-400/700 hover:shadow-1g">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {time}
              </span>
            </div>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company Logo" className="w-[15%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
