export const SwapHistory = (props) => {
  return (
    <div className="flex self-center my-7 justify-around font-semibold ">
      <div className="flex flex-col items-center text-lg">
        <div className="font-black font-mono text-xl">SELECTED</div>
        <div className="h-32 w-32 m-1 bg-red-400  flex items-center justify-center">
          {props.selected ? (
            <div>
              <div>id: {props.selected.id}</div>
              <div>tab: {props.selected.currentTab}</div>
              <div>index: {props.selected.indexInTab}</div>
            </div>
          ) : (
            <div>Nothing</div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="font-black font-mono text-xl">SWAP HISTORY</div>
        <div className="flex flex-col-reverse sm:flex-row-reverse">
          {props.swapHistory.map((e, i) => (
            <div
              className="m-1 h-32 w-32  bg-red-400  flex flex-col items-center justify-start"
              key={i}
            >
              {
                <div className="text-xl font-bold my-2">
                  {props.steps === 1
                    ? props.steps
                    : props.steps === 2
                    ? props.steps + i - 1
                    : props.steps + i - 2}
                </div>
              }
              <div className="my-1">id: {e[0].id}</div>
              <div>🔀</div>
              <div>id: {e[1].id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
