import { useRouter } from "next/router";
import React, { FunctionComponent, useMemo } from "react";
import { avaliableGameData, avaliableGameHeader } from "../../utils";
import ButtonWidget from "../../widget/button.widget";
import TableWidget from "../../widget/table.widget";

const AvaliableGame: FunctionComponent = () => {
  const route = useRouter();
  const row = useMemo(() => {
    return avaliableGameData.map((data, index) => (
      <tr key={index}>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.gameId}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.limit}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.entryFee}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.no_of_player}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.created_date}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          <ButtonWidget
            className="w-[123px] h-[40px] text-white text-[12px] font-medium bg-[#438FFE] rounded-lg mr-6"
            text="Request to join"
            handleSubmit={() => route.push("/gameplay")}
          />
          <ButtonWidget
            className="w-[123px] h-[40px] text-[#438FFE] text-[12px] font-medium bg-[transparent] rounded-lg border border-[#438FFE] border-solid"
            text="Spectate"
            handleSubmit={() => route.push("/spectating")}
          />
        </td>
      </tr>
    ));
  }, []);
  return (
    <div className="mb-10">
      <TableWidget header={avaliableGameHeader} row={row} />
    </div>
  );
};

export default AvaliableGame;
