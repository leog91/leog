export const TabSelector = (props) => {
  return (
    <div className="flex bg-red-300">
      {props.vault.map((t, i) => (
        <div
          key={t.name}
          className={`hover:bg-red-200 p-3
                ${i === props.currentTab && "bg-red-200"}`}
          onClick={() => props.setCurrentTab(i)}
        >
          {" "}
          {t.name}
        </div>
      ))}
    </div>
  );
};
