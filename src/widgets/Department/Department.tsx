"use client";

import Titlebar from "@components/TitleBar";
import { departments } from "@utils/constants";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type DepartmentType = keyof typeof departments;

export default function Department() {
  const params = useParams();
  const depId = params?.depId as DepartmentType | undefined;

  const [department, setDepartment] = useState<null | typeof departments.ce>(
    null
  );

  useEffect(() => {
    if (depId && departments[depId]) {
      setDepartment(departments[depId]);
    } else {
      setDepartment(null);
    }
  }, [depId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [depId]);

  if (!department) {
    return (
      <div className="px-[5vw] py-[2rem]">
        <Titlebar title="Department Not Found" />
        <p>Sorry, this department does not exist.</p>
      </div>
    );
  }

  return (
    <div className="px-[5vw] py-[2rem] space-y-6 text-justify">
      <Titlebar title={`Department of ${department.name}`} />

      <p>{department.overview}</p>

      {department.vision && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Vision</h2>
          <p>{department.vision}</p>
        </div>
      )}

      {department.mission?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Mission</h2>
          <ul className="list-disc list-inside space-y-1">
            {department.mission.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {department.peo?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Programme Educational Objectives (PEO)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {department.peo.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {department.pso?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Programme Specific Outcomes (PSO)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {department.pso.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {department.labs?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Labs</h2>
          <ul className="list-disc list-inside space-y-1">
            {department.labs.map((l, idx) => (
              <li key={idx}>{l}</li>
            ))}
          </ul>
        </div>
      )}

      {department.faculty?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-4">Faculty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {department.faculty.map((f, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 flex-shrink-0">
                  {f.photo ? (
                    <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 w-full flex flex-col items-center">
                  <h3 className="text-[1.1rem] font-medium text-center text-gray-800 leading-tight mb-1">{f.name}</h3>
                  <p className="text-[0.9rem] text-primary text-center font-medium opacity-80">{f.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
