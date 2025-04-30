import React from "react";
import { MdEmail } from "react-icons/md";

export default function Reference() {
  return (
    <section className="section-mt">
      <h2 className="section-title">References</h2>
      <div className="mt-2">
        <div>
          <p>Prof. Dr. Be-Nazir Ahmed</p>
          <p>
            Former National Consultant, Directorate General of Health Services
            (DGHS)
          </p>
          <div className="flex items-center space-x-2">
            <MdEmail />
            <a href="mailto:{benazir1959@gmail.com">benazir1959@gmail.com</a>
          </div>
        </div>
        <div className="mt-1">
          <p>Dr. Md. Amiruzzaman</p>
          <p>Treasurer, HISP Bangladesh Foundation</p>
          <div className="flex items-center space-x-2">
            <MdEmail />
            <a href="mailto:zamanamir25@gmail.com">zamanamir25@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
