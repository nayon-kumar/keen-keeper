"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { MyContext } from "@/context/TimelineContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { use, useContext } from "react";
import { IoMdVideocam } from "react-icons/io";
import { LuArchive, LuMessageSquareText, LuPhoneCall } from "react-icons/lu";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { toast } from "react-toastify";

const friendsPromise = fetch(
  "https://keen-keeper-khaki-pi.vercel.app/friends.json",
  {
    cache: "no-store",
  },
).then((res) => res.json());

const FriendId = ({ params }) => {
  const { timelines, setTimelines } = useContext(MyContext);
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleClick = (newContext, type, date = formattedDate) => {
    toast.success(
      `${type === "text" ? "Text" : type === "call" ? "Call" : "Video"} with ${newContext.name}`,
      { position: "top-center" },
    );
    setTimelines([...timelines, { ...newContext, type, date }]);
  };

  const { id } = useParams(params);
  const friends = use(friendsPromise);

  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  return (
    <div className="pt-36 pb-20 bg-[#F8FAFC]">
      <MyContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left side */}
          <div>
            <div className="p-6 text-center shadow sm:shadow-lg bg-white rounded-lg">
              <Image
                src={expectedFriend.picture}
                alt={expectedFriend.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full mx-auto"
              />
              <h4 className="text-[#1F2937] font-semibold text-xl mt-3">
                {expectedFriend.name}
              </h4>
              <p
                className={`text-white  px-2 py-2 text-[12px] font-medium rounded-full inline-block mt-3.5 capitalize ${expectedFriend.status === "Overdue" ? "bg-[#EF4444]" : expectedFriend.status === "Almost Due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}
              >
                {expectedFriend.status}
              </p>
              <div className="flex gap-2 items-center justify-center mt-2">
                {expectedFriend.tags.map((tag, index) => (
                  <div key={index}>
                    <p className="text-[#244D3F] bg-[#CBFADB] text-[12px] font-medium uppercase rounded-full px-2 py-1.5">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-medium text-[#64748B] mt-3">
                "{expectedFriend.bio}"
              </p>
              <p className="mt-3 text-[#64748B] text-sm ">
                Preferred: {expectedFriend.email}
              </p>
            </div>
            <div className="flex flex-col text-center mt-4 space-y-2 font-medium">
              <div className="border-[#E9E9E9] border-2 bg-white py-3 text-[#1F2937] rounded-sm hover:shadow-sm cursor-pointer">
                <p className="flex items-center justify-center gap-2">
                  <RiNotificationSnoozeLine size={20} />
                  Snooze 2 Weeks
                </p>
              </div>
              <div className="border-[#E9E9E9] border-2 bg-white py-3 text-[#1F2937] rounded-sm hover:shadow-sm cursor-pointer">
                <p className="flex items-center justify-center gap-2">
                  <LuArchive size={20} />
                  Archive
                </p>
              </div>
              <div className="border-[#E9E9E9] border-2 bg-white py-3 text-[#EF4444] rounded-sm hover:shadow-sm cursor-pointer">
                <p className="flex items-center justify-center gap-2">
                  <RiDeleteBinLine size={20} />
                  Delete
                </p>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-lg py-8 px-4 shadow sm:shadow-lg">
                <h4 className="text-[#244D3F] font-semibold text-2xl">
                  {expectedFriend.days_since_contact}
                </h4>
                <p className="text-[#64748B] text-lg">Days Since Contact</p>
              </div>
              <div className="text-center bg-white rounded-lg py-8 px-4 shadow sm:shadow-lg">
                <h4 className="text-[#244D3F] font-semibold text-2xl">
                  {expectedFriend.goal}
                </h4>
                <p className="text-[#64748B] text-lg">Goal (Days)</p>
              </div>
              <div className="text-center bg-white rounded-lg py-8 px-4 shadow sm:shadow-lg">
                <h4 className="text-[#244D3F] font-semibold text-2xl">
                  {expectedFriend.next_due_date}
                </h4>
                <p className="text-[#64748B] text-lg">Next Due</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6 shadow sm:shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-[#244D3F] font-medium text-xl">
                  Relationship Goal
                </p>
                <p className="btn">Edit</p>
              </div>
              <p className="text-lg text-[#64748B] mt-4">
                Connect every{" "}
                <span className="text-[#1F2937] font-bold">
                  {expectedFriend.goal} days
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6 shadow-lg">
              <p className="text-[#244D3F] font-medium text-xl">
                Quick Check-In
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div
                  onClick={() => handleClick(expectedFriend, "call")}
                  className="bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center p-4 border-2 border-[#E9E9E9] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  <LuPhoneCall size={30} />
                  <p className="text-lg text-[#1F2937] mt-2">Call</p>
                </div>
                <div
                  onClick={() => handleClick(expectedFriend, "text")}
                  className="bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center p-4 border-2 border-[#E9E9E9] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  <LuMessageSquareText size={30} />
                  <p className="text-lg text-[#1F2937] mt-2">Text</p>
                </div>
                <div
                  onClick={() => handleClick(expectedFriend, "video")}
                  className="bg-[#F8FAFC] rounded-lg flex flex-col items-center justify-center p-4 border-2 border-[#E9E9E9] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  <IoMdVideocam size={30} />
                  <p className="text-lg text-[#1F2937] mt-2">Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default FriendId;
