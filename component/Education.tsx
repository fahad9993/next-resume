import { FaRegCalendarDays } from "react-icons/fa6";

export default function Education() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Education</h2>
      {/* bsc */}
      <div>
        <h3 className="section-h1">BSc in Mechanical Engineering</h3>
        <h4 className="section-h2">
          Bangladesh University of Engineering and Technology
        </h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>2012 - 2027</span>
          </div>
        </div>
      </div>
      {/* hsc */}
      <div>
        <h3 className="section-h1">HSC</h3>
        <h4 className="section-h2">Dhaka Residential Model College</h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>2008 - 2011</span>
          </div>
        </div>
      </div>
      {/* ssc */}
      <div>
        <h3 className="section-h1">SSC</h3>
        <h4 className="section-h2">Dhaka Residential Model College</h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>2006 - 2008</span>
          </div>
        </div>
      </div>
    </section>
  );
}
