import React, { FunctionComponent, useMemo } from "react";
import { IHeaderProps } from "../../interface/header.props";
import { FaChessPawn } from "react-icons/fa";
import { useRouter } from "next/router";
import { HeaderChangeColor } from "../utils";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const { children, wallet, etherAccount } = props;
  console.log(props);
  const route = useRouter();
  const isPlay = useMemo(() => {
    return HeaderChangeColor.includes(route.pathname) ? true : false;
  }, [route]);

  return (
    <>
      <div className={`w-full ${isPlay ? "bg-[#202020]" : "bg-[#d9d9d8]"}`}>
        <div
          className={`flex py-6 justify-between mx-11 ${
            isPlay ? "border-b border-solid border-[#E5E5E5]" : ""
          }`}
        >
          <p
            className={`flex font-bold text-[18px] items-center text-${
              isPlay ? "white" : "black"
            }`}
          >
            CHESS
            <span className="px-2">
              <FaChessPawn className="text-[#5E6367] w-8 h-8" />
            </span>
            GAMES
          </p>
          {!!wallet?.length && !!etherAccount?.length && (
            <div className="">
              <span className="border-0 border-solid bg-[#438FFE] p-4 rounded-l-lg">
                {wallet} ETH
              </span>
              <span
                className={`border-0 border-solid bg-${
                  isPlay ? "[#383531]" : "white"
                } p-4 rounded-r-lg`}
              >
                {etherAccount.slice(0, 3)}...{" "}
                {etherAccount.split("").reverse().join("").slice(0, 3)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div>{children}</div>
    </>
  );
};

export default Header;
