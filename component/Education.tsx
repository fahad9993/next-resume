import { FaRegCalendarDays } from "react-icons/fa6";

export default function Education() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-medium text-mblue border-b-3 uppercase">
        Education
      </h2>
      {/* bsc */}
      <div>
        <h3 className="text-xl mt-1">BSc in Mechanical Engineering</h3>
        <h4 className="text-lg font-bold">
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
        <h3 className="text-xl mt-1">HSC</h3>
        <h4 className="text-lg font-bold">Dhaka Residential Model College</h4>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2 mt-1">
            <FaRegCalendarDays />
            <span>2008 - 2011</span>
          </div>
        </div>
      </div>
      {/* ssc */}
      <div>
        <h3 className="text-xl mt-1">SSC</h3>
        <h4 className="text-lg font-bold">Dhaka Residential Model College</h4>
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
