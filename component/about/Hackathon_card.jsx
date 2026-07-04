import Image from "next/image";
import { FaAward, FaGithub, FaExternalLinkAlt, FaUser  } from "react-icons/fa";

import { MdCalendarMonth , MdLocationPin } from "react-icons/md";

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800">
            <Image
              src={hackathon.logo}
              alt={hackathon.title}
              width={40}
              height={40}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {hackathon.title}
            </h3>

            <div className="mt-1 flex items-center gap-3 text-sm text-zinc-400">
              <p className="flex items-center gap-1">
                <MdLocationPin size={14} />
                <span>{hackathon.location}</span>
              </p>
              <p className="flex items-center gap-1">
                <MdCalendarMonth size={14} />
                <span>{hackathon.duration}</span>
              </p>
            </div>
          </div>
        </div>

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          {hackathon.status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-zinc-300">
        {hackathon.description}
      </p>

      {/* Outcome */}
      <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-3">
        <div className="flex items-center gap-2 text-yellow-400">
          <FaAward size={16} />
          <span className="text-sm font-medium">Achievement</span>
        </div>

        <p className="mt-1 text-sm text-zinc-300">{hackathon.outcome}</p>
      </div>

      {/* Role */}
      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
        <FaUser size={15} />
        <span>{hackathon.role}</span>
      </div>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {hackathon.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        {hackathon.certificate && (
          <a
            href={hackathon.certificate}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800"
          >
            <FaExternalLinkAlt size={15} />
            Certificate
          </a>
        )}

        {hackathon.github && (
          <a
            href={hackathon.github}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800"
          >
            <FaGithub size={15} />
            GitHub
          </a>
        )}

        {hackathon.live && (
          <a
            href={hackathon.live}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800"
          >
            <FaExternalLinkAlt size={15} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default HackathonCard;
