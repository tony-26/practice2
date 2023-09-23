import _ from "lodash";
const ColorFilter = ({ filterColor, filterColors, setFilterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        onClick={() => {
          let copy = _.cloneDeep(filterColors);
          if (filterColors.includes(filterColor)) {
            copy = copy.filter((color) => color !== filterColor);
          } else {
            copy.push(filterColor);
          }
          setFilterColors(copy);
        }}
      />
    </div>
  );
};
export default ColorFilter;
