export const Grid = (props) => {
  return (
    <div className="mb-4 p-1 grid grid-cols-6  grid-rows-8 gap-1 bg-black  ">
      {props.vault[props.currentTab].content.map((e, i) => (
        <div
          key={e.id}
          className="flex items-center justify-center h-14  bg-red-400  hover:bg-red-200 cursor-pointer"
          onClick={() => {
            props.selected
              ? props.swap({
                  id: e.id,
                  currentTab: props.currentTab,
                  indexInTab: i,
                })
              : props.setSelected({
                  id: e.id,
                  currentTab: props.currentTab,
                  indexInTab: i,
                });
          }}
        >
          {props.selected &&
          props.vault[props.selected.currentTab].content[
            props.selected.indexInTab
          ] === props.vault[props.currentTab].content[i] ? (
            <div className=" font-black text-xl ">{e.id} </div>
          ) : (
            <div>{e.id} </div>
          )}
        </div>
      ))}
    </div>
  );
};
