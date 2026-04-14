import Banner from "@/components/Home/Banner";
import Friends from "@/components/Home/Friends";
import Status from "@/components/Home/Status";

export default function Home() {
  return (
    <div>
      <main className="bg-[#F8FAFC]">
        <Banner />
        <Status />
        <Friends />
      </main>
    </div>
  );
}
