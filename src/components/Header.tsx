import { GrCircleInformation } from "react-icons/gr";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const menuItems = [
  {
    label: "Whitepaper",
    label2: "How to mint",
    link: "https://popcult.io/whitepaper",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 px-4 md:px-8">
      <h2 className="flex items-center text-2xl font-[700]">
        PopCult.io by{" "}
        <img
          src="/images/iwan-smith.png"
          alt="Iwan Smith"
          className="ml-[0.35rem] h-[25px]"
        />
      </h2>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <GrCircleInformation className="cursor-pointer text-3xl" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-black/50 text-xl font-bold">
            {menuItems.map((item, id) => (
              <Menu.Item key={id}>
                {({ active }) => (
                  <a
                    href="https://popcult.io/whitepaper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="group flex w-full items-center rounded-md px-4 py-3 text-white">
                      {item.label}
                    </button>
                    <a
                    href="https://popcult.io/how-to-mint-pop-cult-nfts/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="group flex w-full items-center rounded-md px-4 py-3 text-white">
                      {item.label2}
                    </button>
                    </a>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Header;
