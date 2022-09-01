import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import {
  DISCORD_URL,
  INSTAGRAM_URL,
  OPENSEA_URL,
  TWITTER_URL,
} from "../config";
import Opensea from "./Opensea";

const aTagProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-between py-5 px-4 md:px-8">
      <h3 className="font-bold">© 2022 PopCult.io</h3>

      <div className="flex items-center justify-center space-x-4 text-xl">
        <a href={TWITTER_URL} {...aTagProps}>
          <FaTwitter />
        </a>
        <a href={DISCORD_URL} {...aTagProps}>
          <FaDiscord />
        </a>
        <a href={INSTAGRAM_URL} {...aTagProps}>
          <FaInstagram />
        </a>
        <a href={OPENSEA_URL} {...aTagProps}>
          <Opensea />
        </a>
      </div>
    </div>
  );
};

export default Footer;
