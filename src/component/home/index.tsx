import { Children, FunctionComponent, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { HiPlus } from "react-icons/hi";
import { TabValue } from "../../../interface/tab.enum";
import ButtonWidget from "../../widget/button.widget";
import TabWidget from "../../widget/tab.widget";
import AvaliableGame from "./AvaliableGame";
import CompleteGame from "./CompleteGame";
import { BiCalendar } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import ModalWidget from "../../widget/modal.widget";
import SelectWidget from "../../widget/select.widget";
import { EntryFess, RoomPrivacy } from "../../utils";
import { OptionType } from "../../../interface/select.props";

const IndexHome: FunctionComponent = () => {
  const [selectTab, setSelectTab] = useState<string>(TabValue.AVAILABLE_GAMES);
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const [entryFee, setEntryFee] = useState(EntryFess[0]);
  const [room, setRoom] = useState(RoomPrivacy[0]);

  const entryFeeHandleselect = (value: OptionType) => {
    setEntryFee(value);
  };

  const roomHandleselect = (value: OptionType) => {
    setRoom(value);
  };

  return (
    <div className="px-[40px]">
      <div className="float-right mt-6 flex">
        <div className="relative mr-4">
          <div className="absolute top-4 left-4">
            <BiCalendar className="text-[#535353]" />
          </div>
          <ReactDatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            className="border border-[#E1E1E1] text-[#001A14] text-center text-[14px] font-semibold bg-transparent px-4 py-3 rounded-md mr-0"
          />
          <div className="absolute right-4 top-4">
            <BsChevronDown className="text-[#535353]" />
          </div>
        </div>

        <div>
          <ButtonWidget
            className="bg-[#438FFE] w-[170px] text-white rounded-lg h-[47px] text-left text-[14px] font-semibold flex items-center justify-evenly"
            text="Create New Room"
            handleSubmit={() => setShowModal(true)}
            icon={<HiPlus className="text-white" />}
          />
        </div>
      </div>
      <div className="mt-8">
        <TabWidget
          className="pt-8"
          selectTab={selectTab}
          tab={Object.values(TabValue)}
          setSelectedTab={(value) => setSelectTab(value)}
        />
      </div>

      {selectTab === TabValue.AVAILABLE_GAMES ? (
        <AvaliableGame />
      ) : (
        selectTab === TabValue.COMPLETED_GAMES && <CompleteGame />
      )}
      <div>
        <ModalWidget show={showModal} onClose={() => setShowModal(false)}>
          <div className="w-[495px]">
            <h3 className="font-bold text-[18px]">Create New Room</h3>
            <div className="mt-6">
              <p className="font-bold text-[14px] mb-3">Entry Fee</p>
              <SelectWidget
                option={EntryFess}
                value={entryFee}
                handleselect={entryFeeHandleselect}
              />
            </div>
            <div className="mt-6 mb-6">
              <p className="font-bold text-[14px] mb-3">Room Privacy</p>
              <SelectWidget
                value={room}
                option={RoomPrivacy}
                handleselect={roomHandleselect}
              />
            </div>
            <div className="float-right">
              <ButtonWidget
                text="Cancel"
                className="border-2 border-solid border-[#929292] text-[#929292] w-[100px] h-[40px] rounded-md font-medium mr-6"
                handleSubmit={() => setShowModal(false)}
              />
              <ButtonWidget
                text="Save"
                className="bg-[#438FFE] text-white w-[100px] h-[40px] rounded-md font-medium"
                handleSubmit={() => setShowModal(false)}
              />
            </div>
          </div>
        </ModalWidget>
      </div>
    </div>
  );
};

export default IndexHome;
