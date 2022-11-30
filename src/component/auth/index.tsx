import React, { FunctionComponent } from "react";
import { Coinbase, MeatMask } from "../../../assests/icons";
import ButtonWidget from "../../widget/button.widget";

const IndexAuth: FunctionComponent = (props: any) => {
  return (
    <div className="text-center mt-16">
      <h1 className="font-bold text-[46px] leading-[63px]">
        Welcome to Chess Games
      </h1>
      <p className="font-normal text-[16px] text-[#717171] leading-[21.98px]">
        Sign in with your wallet to be able to authenticate and play games
      </p>

      <div className="mt-16">
        <ButtonWidget
          handleSubmit={() => props.requestAccount()}
          text="Sign in with metamask"
          className="bg-[#438FFE] w-[401px] text-white rounded-full h-[65px] text-left pl-[50px] text-[18px] font-semibold"
          icon={
            <picture className="pr-[60px]">
              <img
                src={MeatMask.src}
                alt=""
                className="w-[26px] h-[23px] inline"
              />
            </picture>
          }
        />
      </div>
      <div className="mt-5">
        <ButtonWidget
          handleSubmit={() => {}}
          text="Sign in with Coinbase Wallet"
          className="bg-[transparent] border border-solid border-black w-[401px] text-black rounded-full h-[65px] text-left pl-[50px] text-[18px] font-semibold"
          icon={
            <picture className="pr-[40px]">
              <img
                src={Coinbase.src}
                alt=""
                className="w-[26px] h-[23px] inline"
              />
            </picture>
          }
        />
      </div>
      <p className="font-semibold text-[18px] leading-[30px] hover:underline cursor-pointer mt-10">
        Show more options
      </p>
    </div>
  );
};

export default IndexAuth;
