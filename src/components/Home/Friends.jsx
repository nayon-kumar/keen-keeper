import { use } from "react";
import MyContainer from "../Shared/MyContainer";
import FriendCard from "@/ui/FriendCard";

const friendsPromise = fetch("http://localhost:3000/friends.json").then((res) =>
  res.json(),
);

const Friends = () => {
  const friends = use(friendsPromise);

  console.log(friends);
  return (
    <MyContainer>
      <div className="mt-10 border-t-2 border-[#E9E9E9] pt-10">
        <h3 className="font-semibold text-2xl">Your Friends</h3>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-6 pb-20">
        {friends.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Friends;
