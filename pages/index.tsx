import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiSearch, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { FaMoneyBillWave } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 px-2  pt-1 ">
          <div className="text-3xl h-fit w-fit hover:bg-gray-400 p-1 rounded-full">
            <BsTwitter />
          </div>
          <div className="mt-4 text-1xl  pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start gap-4 items-center hover:bg-gray-400 rounded-full px-1 py-2 w-fit cursor-pointer"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mr-6 mt-4 ">

            <button className="bg-[#1d9bf0] p-3 rounded-full w-full ">
              Tweet
            </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] pr-0 h-screen overflow-scroll  overflow-x-hidden border-slate-500">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
