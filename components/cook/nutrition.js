const Nutrition = (props) => {
  const nutrients = props.nutrition.map((a) => a.split(" "));

  //   console.log("nutrients ==>", nutrients);
  return (
    <div className="my-3">
      <ul>
        {nutrients.map((n) => (
          <li key={n[0]}>{n[0] + " " + n[1]}</li>
        ))}
        {/* {props.nutrition.map((v) => (
          <li key={v}>{v}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Nutrition;
