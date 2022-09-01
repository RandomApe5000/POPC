import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

import { CHAIN } from "../config";

const ConnectButton = () => {
  const { switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  const { chain } = useNetwork();

  return (
    <>
      <Connect.Custom>
        {({ openConnectModal }) => {
          if (address && chain?.id == CHAIN.id) {
            return null;
          }

          return (
            <button
              onClick={() => {
                if (!address) {
                  openConnectModal();
                } else {
                  switchNetwork!(CHAIN.id);
                }
              }}
              className="mt-10 rounded-full bg-[#373a40] py-3 px-8 font-bold text-white"
            >
              {!address
                ? "Connect Wallet"
                : chain?.id != CHAIN.id &&
                  address &&
                  `Switch Network To ${CHAIN.name}`}
            </button>
          );
        }}
      </Connect.Custom>
    </>
  );
};

export default ConnectButton;
