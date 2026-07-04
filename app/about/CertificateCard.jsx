import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const CertificateCard = ({ cert }) => {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5 hover:border-zinc-600 transition">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
          {cert.logo ? (
            <Image
              src={cert.logo}
              alt={cert.title}
              width={30}
              height={30}
            />
          ) : (
            <FaAward className="text-yellow-400" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-white">
            {cert.title}
          </h3>

          <p className="text-sm text-zinc-400">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
      >
        View Certificate
        <FiExternalLink />
      </a>
    </div>
  );
};
export default CertificateCard;