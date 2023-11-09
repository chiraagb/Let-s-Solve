import Link from "next/link";
import clsx from "clsx";
import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  { title: "GitHub", href: "https://github.com/chiraagb/", icon: FaGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaSquareFacebook,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/chiraagb/",
    icon: FaLinkedin,
  },
  { title: "Twitter", href: "https://twitter.com/chiraagb", icon: FaXTwitter },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
