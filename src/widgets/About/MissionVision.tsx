import Titlebar from "@components/TitleBar";
import React from "react";

export default function MissionVision() {
  return (
    <div className="px-[5vw] py-[2rem] flex flex-col gap-5 text-justify text-gray-700 leading-relaxed ">
      <Titlebar title="Our Philosophy" />

      <p className="">
        Carmel Polytechnic College aims at providing superior quality trained
        man-power having social commitment along with career advancement to meet
        the challenges and opportunities thrown up by the fast-evolving society
        in the 21st century. <br />
        <br />
        It is our avowed ambition to synergize all the input factors to provide
        the best possible products to the industry and the country at large. We
        will spare no means at moulding our students into wholesome individuals
        and be trailblazer in the field of science and technology. <br /> <br />
        As knowledge is power, our ardent efforts and sustained toil are
        combined with the know-how to produce the best desired results. With
        intelligent labour and definite objectives, our student resource is put
        to optimum use both for themselves and for the nation.
      </p>
      <span className="text-2xl font-semibold">
        What <span className="text-primary">Carmel Polytechnic College</span>{" "}
        believes in
      </span>

      {/* Vision & Mission */}
      <div className="space-y-10">
        <div className="flex flex-col gap-6">
          {/* Vision */}
          <div className=" space-y-2">
            <h4 className="text-sm font-semibold tracking-wider text-primary">OUR VISION</h4>
            <ul className="list-disc pl-5">
              <li>
                To be a Centre of Excellence in Technical education and training
                equipped with an elevated learning environment catering to the
                timely demands of industry and society.
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className=" space-y-2">
            <h4 className="text-sm font-semibold tracking-wider text-primary">
              OUR MISSION
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                To mould technically qualified technicians by providing elegant
                faculty and well-equipped infrastructure.
              </li>
              <li>
                To transform students into integrated professionals who uphold
                the needs of the society.
              </li>
              <li>
                To create entrepreneurs befitting environmental and global needs
                of the time.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      {/* <div className="space-y-4">
        <h4 className="text-xl font-semibold underline underline-offset-4">
          Core Values
        </h4>
        <div className="flex flex-wrap gap-4">
          {[
            "Faith in God",
            "Commitment to excellence",
            "Respect for diversity",
            "Integrity in actions",
            "Accountability for outcomes",
            "Compassion for others",
            "Dedication to service",
            "Excellence in innovation",
            "Collaboration and teamwork",
            "Respect for integrity",
          ].map((value) => (
            <div key={value} className="px-4 py-2 border-[2px] rounded-md border-primary">
              <span className="rounded-lg text-sm font-medium">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
