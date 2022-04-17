import React from "react";

const Disclosure = () => {
  //rename

  //open,close

  const nav = [
    {
      title: "What is your refund policy?",
      content:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      title: "Do you offer technical support?",
      content: "No",
    },
  ];

  const elem = (e) => (
    <div key={e.title}>
      <div className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
        {e.title}
      </div>
      <div className="px-4 pt-4 pb-2 text-sm text-gray-500">{e.content}</div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      {nav.map((e) => elem(e))}
    </div>
  );
};

export default Disclosure;
