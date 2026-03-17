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
          <h2 className="text-xl font-semibold mt-6 mb-2">Faculty</h2>
          <ul className="list-disc list-inside space-y-1">
            {department.faculty.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
