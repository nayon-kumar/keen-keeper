import Banner from "@/components/Home/Banner";
import Status from "@/components/Home/Status";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-[#F8FAFC]">
        <Banner />
        <Status />
      </main>
    </div>
  );
}
