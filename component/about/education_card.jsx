import { FaGraduationCap } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import Image from "next/image";

const EducationCard = ({ edu }) => {
  return (
    <div className="group w-full  rounded-2xl border border-zinc-700/50 bg-zinc-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-xl  flex items-center justify-center">
            <Image src={edu.image} alt={edu.name} width={40} height={40} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">
              {edu.name}
            </h3>

            <p className="text-xs text-zinc-400">
              {edu.school}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
          <MdCalendarMonth />
          {edu.year}
        </div>
      </div>

      {/* Details */}
      <p className="mt-4 text-sm leading-6 text-zinc-300">
        {edu.det}
      </p>

      {/* Marks / CGPA */}
      <div className="mt-4 inline-flex items-center rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2">
        <span className="text-sm font-medium text-blue-400">
          {edu.mark}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
