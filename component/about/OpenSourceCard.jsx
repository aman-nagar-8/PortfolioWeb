import { FaGithub, FaCodeBranch } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoCheckmarkCircle } from "react-icons/io5";

const OpenSourceCard = ({ project }) => {
  return (
    <div className="group rounded-2xl border border-zinc-700/50 bg-zinc-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FaGithub className="text-xl text-zinc-300" />
            <h3 className="text-xl font-semibold text-white">
              {project.project}
            </h3>
          </div>

          <p className="mt-1 text-sm text-zinc-400">
            Open Source Contributions
          </p>
        </div>

        <div className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
          {project.totalPRs} PRs
        </div>
      </div>

      {/* PR List */}
      <div className="mt-5 space-y-3">
        {project.contributions.map((contribution) => (
          <div
            key={contribution.pr}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-3"
          >
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500" />

              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
                    {contribution.pr}
                  </span>

                  <span className="text-sm text-zinc-200">
                    {contribution.title}
                  </span>
                </div>
              </div>
            </div>

            <span className="text-xs text-zinc-500">
              {contribution.status}
            </span>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <FaCodeBranch />
          <span>{project.totalPRs} Contributions Merged</span>
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800"
        >
          <FaGithub />
          Repository
          <FiExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default OpenSourceCard;