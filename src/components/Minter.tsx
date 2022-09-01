import { useEffect, useState } from "react";
import useMint from "../hooks/useMint";
import CompletedMinting from "./CompletedMinting";
import ConnectButton from "./ConnectButton";

const Minter = () => {
  const [fetchedMintPrice, setFetchedMintPrice] = useState("");

  const {
    isLoggedIn,
    maxSupply,
    totalSupply,
    saleStatus: { isPublicSaleOpen, isWhitelistSaleOpen },
    mintPrice,
    setPaymentMethod,
    paymentMethod,
    quantity,
    setQuantity,
    buttonText,
    mint,
    txId,
    setTxId,
    isDisabled,
  } = useMint();

  useEffect(() => {
    (async () => {
      const fetchedMintPrice = await mintPrice();
      setFetchedMintPrice(fetchedMintPrice!);
    })();
  }, [mintPrice, paymentMethod, quantity]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:mt-28 md:flex-row">
      <CompletedMinting
        txId={txId}
        onClose={() => {
          setTxId("");
        }}
      />
      <div className="flex-1 md:w-[50%]">
        <img src="/images/popcult-banner.gif" alt="Popcult Banner" />
      </div>
      <div
        className={`${
          isLoggedIn ? "h-[800px]" : "h-[450px]"
        } flex-1 py-2 md:w-[50%] md:px-3`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md p-10 md:p-20">
          {isLoggedIn ? (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                {totalSupply}/{maxSupply}
              </h2>
              {!isWhitelistSaleOpen && !isPublicSaleOpen && (
                <h3 className="mt-2 text-xl font-bold">
                  Sale Is Paused
                </h3>
              )}
              {isWhitelistSaleOpen && (
                <h3 className="mt-2 text-xl font-bold">
                  Seed Sale Is Open
                </h3>
              )}
              {isPublicSaleOpen && (
                <h3 className="mt-2 text-xl font-bold">Public Sale Is Open</h3>
              )}
              <img
                src="/images/mint.gif"
                alt="Popcult Packet"
                className="w-[80%]"
              />

              <div className="mt-3 flex w-full justify-between font-bold">
                <h4 className="text-lg">
                  Mint Price: {fetchedMintPrice}
                  {paymentMethod.toUpperCase()}
                </h4>

                <div className="flex items-center space-x-3">
                  <button
                    className="flex h-full items-center justify-center rounded-lg bg-zinc-800 px-2 text-2xl leading-[0] text-white"
                    onClick={() => {
                      if (quantity - 1 >= 1) {
                        setQuantity((quantity) => quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="flex h-full items-center justify-center rounded-lg bg-zinc-800 px-2 leading-[0] text-white"
                    onClick={() => {
                      if (quantity + 1 <= 10) {
                        setQuantity((quantity) => quantity + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-x-5 text-center">
                <h4 className="mt-8 text-lg font-semibold">
                  What payment method would you like to use?
                </h4>

                <span className="space-x-2">
                  <input
                    type="radio"
                    id="eth"
                    value="ETH"
                    checked={paymentMethod === "eth"}
                    onChange={() => {
                      setPaymentMethod("eth");
                    }}
                  />
                  <label htmlFor="html">ETH</label>
                </span>
                <span className="space-x-2">
                  <input
                    type="radio"
                    id="usdc"
                    value="USDC"
                    checked={paymentMethod === "usdc"}
                    onChange={() => {
                      setPaymentMethod("usdc");
                    }}
                  />
                  <label htmlFor="css">USDC</label>
                </span>
              </div>

              <button
                className="mt-10 rounded-full bg-[#373a40] py-3 px-8 font-bold text-white disabled:cursor-not-allowed disabled:opacity-80"
                onClick={async () => {
                  await mint();
                }}
                disabled={isDisabled}
              >
                {buttonText}
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-center text-4xl font-bold">Popcult NFT</h1>

              <p className="mt-5 text-center text-xl">
                Pop Cult refers to &apos;Popular Culture&apos; and at the same
                time uses the word &apos;cult&apos; to describe the community
                surrounding it. High-brow art, 90&apos;s cartoons: the source of
                inspiration is endless.
              </p>

              <ConnectButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minter;
