import React from "react";

function MedicalCardMore() {
  return (
    <section id="medicalcode">
      <div className="container-fluid padding mt-5">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4 mb-4">Medical Coding Services</h1>
          </div>
          <hr />
          <div className="col-12">
            <p className="lead mt-5">
              Aryavart Expo has CPC, CPC-H, CCS, CCSP, and CPMB certified
              professionals with ICD-10-CM certification. We aim to scale up our
              processes to become a leading player in this business. Our medical
              coding services help in:
              <ul type="" style={{ textAlign: "left" }}>
                <li> Optimizing revenue by reducing compliance risk</li>
                <li>Improving cash flow by accurate claims submission</li>
                <li>Reducing administrative costs</li>
                <li>
                  Our coding services are available as part of our revenue cycle
                  management services or as a separate service. Our process
                  flawlessly integrates with your billing system to ensure the
                  highest degree of data reliability.
                </li>
              </ul>
            </p>
            <h1 className="display-4 mb-4 mt-5">Aryavart Advantages</h1>
            <hr />
            <ul type="" style={{ textAlign: "left" }}>
              <li>
                {" "}
                Certified professional coders who are specialty-specific and
                dedicated for your business
              </li>
              <li>
                Comprehensive solutions to suit client-specific guidelines and
                policies
              </li>
              <li>
                A workflow management system that tracks every medical record,
                code and status
              </li>
              <li>
                Our rule engine supports compliance and accurate code assignment
              </li>
              <li>
                A well-defined process to identify and fix documentation issues
              </li>
              <li>
                Medicare Risk Adjustment Coding (HCC Coding) Compliance audit
                performed by AAPC certified coders
              </li>
              <li>Evaluating medical records from all settings</li>
              <li>
                Adherence to official coding rules and CMS guidelines for risk
                adjustment reporting
              </li>
              <li>
                Investigate to identify potential errors or missing diagnoses on
                medical records
              </li>
              <li>
                Assigning appropriate HCC value to the corresponding MRA
                Diagnosis code
              </li>
              <li>
                Aryavart Expo has an effective audit system that keeps our
                coding standards equivalent to the best in the industry
              </li>
              <li>
                We also constantly improve our coding skills through continuous
                training programs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalCardMore;
