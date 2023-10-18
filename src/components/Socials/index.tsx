import { memo, useMemo } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";

const Socials = () => {
  const ItensContact = useMemo(
    () => [
      {
        icon: <TfiLinkedin size={30} color="white" />,
        link: "https://linkedin.com/in/fabricio-joaquim",
        className: "bg-blue-700",
      },
      {
        icon: <BiLogoGmail color="red" size={30} />,
        link: "mailto:fabricio.melo@dcomp.ufs.br",
        className: "bg-white",
      },
      {
        icon: <RiWhatsappFill color="white" size={30} />,
        link: "https://wa.me/557999965-1439",
        className: "bg-green-700",
      },
      {
        icon: <FaGithub color="white" size={30} />,
        link: "https://github.com/fabricio-joaquim",
        className: "bg-gray-700",
      },
    ],
    [],
  );
  return (
    <div className="ml-10 gap-3 flex">
      {ItensContact.map(item => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`rounded-md border-2 p-1 shadow-lg 
          hover:shadow-xl transition hover:scale-125 duration-500 ease-in-out
        ${item.className}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default memo(Socials);
