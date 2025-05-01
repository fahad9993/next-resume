import React from "react";
import { MdEmail } from "react-icons/md";

import { Reference as referenceData } from "@/data/data";
import { ReferenceType } from "@/data/types";

export default function Reference() {
  return (
    <section className="section-mt">
      <h2 className="section-title">References</h2>
      <div className="mt-2">
        {referenceData.map((ref: ReferenceType, index: number) => (
          <div key={ref.email} className={!!index ? "mt-6" : ""}>
            <p>{ref.name}</p>
            <p>{ref.designation}</p>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <a href={`mailto:${ref.email}`}>{ref.email}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
