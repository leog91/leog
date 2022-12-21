import React from "react";

export const TimeCell = ({ desc }) => {
  return (
    <div className="relative flex w-full max-w-3xl items-center ">
      <div className=" h-full  w-6" />

      <div className="absolute left-1 ml-1 h-full w-0.5  bg-red-400 "></div>
      <div className="absolute left-2.5 ml-1 h-2 w-2 rounded-full bg-yellow-300 " />

      <div className="my-2 ml-1.5 mr-3 w-full rounded-lg bg-neutral-800 px-1 hover:bg-neutral-700">
        {" "}
        {desc}{" "}
      </div>
    </div>
  );
};

const infoList = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "It is a long established",
  "The standard Lorem Ipsum passage, used since the 1500s",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  "1914 translation by H. Rackham",
];

const Timeline = () => {
  return (
    <div className=" flex  flex-col items-center bg-neutral-900 text-white">
      Timeline
      <div className="border-y-4 border-l-4 border-r-0 border-solid border-y-transparent border-l-yellow-300" />
      <div className="mt-12" />
      {infoList.map((d, i) => (
        <TimeCell key={i} desc={d} />
      ))}
    </div>
  );
};

export default Timeline;
