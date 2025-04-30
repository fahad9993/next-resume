import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

export default function Experience() {
  return (
    <section className="mt-8">
      <h2 className="section-title">Experience</h2>
      {/* exp-1 */}
      <div>
        <h3 className="text-xl mt-1">Admin and Accounts Officer</h3>
        <h4 className="text-lg font-bold">HISP Bangladesh Foundation</h4>
        <div className="flex items-baseline space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>01/2022 - 05/2022</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationDot />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <ul className="list-disc pl-5 mt-2">
              <li>Performed assigned tasks in collaboration with teammates</li>
              <li>
                Organized/Supported face-to-face and/or virtual team meetings
              </li>
              <li>
                Managed HR Operations including employee documentation,
                salaries, leaves, promotions, and other related matters
              </li>
              <li>
                Kept track of different projects, and provide reminders to the
                assigned teams and maintain liaison with the stakeholders
              </li>
              {/* <li>
                Prepared reports, presentations, and financial reports for
                different projects or research
              </li>
              <li>Facilitated the teams with innovative ideas for projects</li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* exp-2 */}
      <div>
        <h3 className="text-xl mt-2">Administartive Assistant</h3>
        <h4 className="text-lg font-bold">World Health Organization</h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>01/2020 - 10/2021</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationDot />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Prepared and finalised financial reports, adhering to specific
                templates and guidelines
              </li>
              <li>
                Arranged accommodation in hotels and managed travel-related
                tasks for the staff
              </li>
              <li>
                Undertook cash purchase according to the rules and processed the
                invoices
              </li>
              <li>
                Provided administrative and secretarial support to provide
                health interventions to the FDMNs
              </li>
              <li>
                Drafted SOPs with inputs from stakeholders and joint
                consultative meetings, MoU with different stakeholders, and
                proofread various guidelines, books, reports, and other
                writings; replied to general and administrative correspondence
                and finalized those
              </li>
              <li>
                Managed mail, queries, and visitors with tact and discretion
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* exp-3 */}
      <div>
        <h3 className="text-xl mt-2">Administartive Assistant</h3>
        <h4 className="text-lg font-bold">
          Directorate General of Health Services
        </h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>11/2017 - 11/2018</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationDot />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Contributed to the development of guidelines on clinical
                management for the FDMNs prepared by CSC, DGHS
              </li>
              <li>
                Participated in the development of different manuals and
                guidelines
              </li>
              <li>
                Contributed to the preparation of the epidemiological report of
                the diphtheria outbreak in the FDMN camps
              </li>
              {/* <li>
                Provided administrative and secretarial support to provide
                health interventions to the forcibly displaced population
              </li>
              <li>Provided support for signing MoU and other documents</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
