const Ingredients = (props) => {
  const ingredients = props.ingredients.map((a) => a.split(" "));

  return (
    <div className="my-3">
      <span className="mr-1 font-semibold">Ingredients:</span>
      {props.ingredients.map(
        (v, i) => `${v}${i === props.ingredients.length - 1 ? "" : ","} `
      )}
    </div>
  );
};

export default Ingredients;
