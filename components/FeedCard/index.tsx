import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border-t  border-slate-500 p-2 hover:bg-slate-400 transition-all cursor-pointer ">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            src="https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg"
            alt={"user-image"}
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 w-[90%]">
          <h5>Mrinal</h5>
          <p>
            ISRO scientist Parvathi returns home to a hero&apos;s welcome at her
            neighborhood after the success of Chandrayaan-3.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
