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
      <p className="mt-2 text-sm">
        <strong>Methodology:</strong> Experimental setups were designed using
        force-sensing resistors (FSR) to measure stress relaxation.{" "}
        <strong>Findings:</strong> Significant stress relaxation behavior was
        observed, highlighting SMA's time-dependent mechanical properties.
      </p>
    </section>
  );
}
