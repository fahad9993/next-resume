import React from "react";

export default function Thesis() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Thesis</h2>
      <p className="mt-2">
        Modification of the Experimental Setup for Measuring Viscoelastic
        Response of Super Elastic Shape Memory Alloy (SMA) Rod under Bending and
        Twisting
      </p>

      {/* Combined Focus, Methodology, and Findings */}
      <ul className="list-disc pl-5 mt-2 space-y-3">
        <li>
          <strong>Design & Development:</strong> Designed custom torsion and
          bending fixtures with Arduino-integrated Force Sensing Resistor
          sensors for precise load measurements.
        </li>
        <li>
          <strong>Findings:</strong> Significant stress relaxation behavior was
          observed, highlighting SMA&apos;s time-dependent mechanical
          properties.
        </li>
        <li>
          <strong>Comparative Insights:</strong> NiTi SMA exhibited faster and
          greater stress relaxation than stainless steel and copper.
        </li>
      </ul>
    </section>
  );
}
