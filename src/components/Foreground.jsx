import React, { useRef } from "react";
import Cards from "./Cards";
import { GoPlus } from "react-icons/go";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.4Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.2Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.7Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
      </div>
  );
}

export default Foreground;
