import React from "react";
import { useState, useEffect } from "react";
import Burger from "../components/button/burger";
import Tab from "../components/tab";
import Disclosure from "../components/utils/disclosure";

const Chat = () => {
  const randomStr =
    "In July 2010, when two Los Angeles Times reporters, Jeff Gottlieb and Ruben Vives, were investigating possible malfeasance in the neighboring city of Maywood";
  //  , it was revealed that Bell city officials were receiving unusually large salaries, perhaps the highest in the United States.The salaries came into the public eye after the newspaper's investigation, based on California Public Records Act requests, showed that the city payroll was swollen with six- to seven-figure salaries.[20] Robert Rizzo, the City manager, received $787,637 a year, almost double the salary of the President of the United States. Including benefits, he had received $1.5 million in the last year.[21] Rizzo's assistant, Angela Spaccia, was earning $376, 288 a year, more than the top administrator for Los Angeles County.[9] The police chief, Randy Adams, was paid $457, 000, 33 % more than Los Angeles Police Chief Charlie Beck.[9] All three resigned following news reports and public outcry.All but one of the members of the city council were receiving $100, 000 for their part - time work, salaries which were authorized by a sparsely attended special election, [22] giving the city "Charter" status.By comparison, council members in cities similar to Bell in size make an average of $4, 800 a year, prosecutors have noted.[9]In September 2010, the California Attorney General's office filed a lawsuit against eight former and current City of Bell employees, requesting the return of what the suit calls "excessive salaries" as well a reduction in pension benefits accrued as a result of those higher salaries.[12] Allegations about irregularities in the 2009 election also were examined by the FBI and California Secretary of State office.[23] The city's high property taxes are also being investigated.[24]On September 21, 2010, former city manager Robert Rizzo, Mayor Oscar Hernandez, former assistant city manager Angela Spaccia and council members George Mirabal, Teresa Jacobo, Luis Artiga, George Cole and Victor Bello were arrested and charged with misappropriation of public funds.[25][26] The mayor and council members all either resigned or were recalled.Of the eight, only Luis Artiga was found not guilty.The revelations about the salary amounts paid to city officials in Bell led media inquires into salaries paid in other cities.[27] After a review, the L.A.Times found frequent failures in audits of public agencies in other municipalities in California";

  const singleChatGenerator = () => {
    const splitted = randomStr.split(" ");

    const randomWord3 = () =>
      splitted[Math.floor(Math.random() * splitted.length)] +
      " " +
      splitted[Math.floor(Math.random() * splitted.length)] +
      " " +
      splitted[Math.floor(Math.random() * splitted.length)];

    const randomColor = () => {
      const colors = [
        "text-red-600",
        "text-blue-600",
        "text-pink-600",
        "text-yellow-400",
        "text-orange-600",
        "text-emerald-500",
        "text-cyan-400",
        "text-violet-600",
        "text-rose-500",
      ];

      return colors[Math.floor(Math.random() * colors.length)];

      // return "text-red-600";
    };

    const c = {
      id: Math.floor(Math.random() * 999999),
      chat: randomWord3(),
      date: new Date().toLocaleTimeString(),
      nick: "nick",
      avatar: "img",
      color: randomColor(),
    };

    return c;

    // return (
    //   splitted[Math.floor(Math.random() * splitted.length)] +
    //   " " +
    //   splitted[Math.floor(Math.random() * splitted.length)] +
    //   " " +
    //   splitted[Math.floor(Math.random() * splitted.length)]
    // );
  };

  // const buildChat = () => {
  //   return new Array(10).fill(3).map((s) => singleChatGenerator());
  // };
  const [chatt, setChatt] = useState([]);

  useEffect(() => {
    // console.log("111", chatt);
    setInterval(() => {
      // console.log("222", chatt);
      setChatt((prev) => {
        // console.log("333", prev);
        const res = prev.length < 6 ? prev : prev.slice(1);
        return [...res, singleChatGenerator()];
        // return [...prev, singleChatGenerator()];
      });
    }, 1000);
  }, []);

  return (
    <div className="text-center">
      {chatt.map((c) => (
        // change

        <div key={c.id} className="flex">
          <div className="bg-slate-600 px-2">{c.date} </div>
          <div className={`ml-1`}>
            <span className={`${c.color} font-black`}> {"> "}</span>
            {c.chat}
          </div>
        </div>
      ))}
    </div>
  );
};

function Block() {
  return (
    <div className="bg-slate-500">
      <div className=" translate-y-6 bg-red-500 ">1111</div>
      <div className="w-12  translate-x-16 translate-y-3 rotate-45  scale-125 bg-red-800  transition-transform delay-150 duration-500 ease-in-out   hover:-translate-y-1 hover:scale-[2]  hover:bg-indigo-500 ">
        2222
      </div>

      <div className="card">ww</div>
    </div>
  );
}

export const Dash = () => {
  const [sub, setSub] = useState(null);

  const [content, setContent] = useState(null);

  const categories = [
    {
      name: "cat1",
      subs: [
        { name: "sub11", content: "some Content 11" },
        { name: "sub12", content: "some Content 12" },
        { name: "sub13", content: "some Content 13" },
      ],
    },
    {
      name: "cat2",
      subs: [
        { name: "sub21", content: "some Content 21" },
        { name: "sub22", content: "some Content 22" },
      ],
    },
    {
      name: "cat3",
      subs: [
        { name: "sub31", content: "some Content 31" },
        { name: "sub32", content: "some Content 32" },
        ,
        { name: "sub33", content: "some Content 33" },
      ],
    },
  ];

  const showSub = (i) => {
    setSub({ index: i, cat: categories[i] });
  };

  return (
    <div className=" h-screen bg-slate-400 text-white ">
      <div className="bg-slate-700 ">Nav</div>

      <div className="flex h-96">
        <div className="w-36 bg-slate-800 p-2">
          {categories.map((c, i) => (
            <div key={c.name} onClick={() => showSub(i)}>
              {c.name}

              {sub && sub.index === i && (
                <div>
                  {sub.cat.subs.map((s) => (
                    <div
                      className="bg-slate-700 pl-2 "
                      key={s.name}
                      onClick={() => setContent(s.content)}
                    >
                      {" "}
                      {s.name}{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col">
          <div className=" bg-slate-600 p-2">{content}</div>
          <Chat />
          <Block />
        </div>
      </div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center bg-orange-600">
        <Burger />
      </div>
      <Tab />
      <div className=" my-4">
        <Disclosure />
      </div>
      <div className="flex h-12 flex-col justify-center bg-slate-900 text-center">
        footer
      </div>
    </div>
  );
};

export default Dash;
