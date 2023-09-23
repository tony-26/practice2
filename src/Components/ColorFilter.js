import _ from "lodash";
const ColorFilter = ({ filterColor, filterColors, setFilterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        onClick={() => {
          const copy = _.cloneDeep(filterColors);
          if (filterColors.includes(filterColor)) {
            const sameColorFlter = copy.filter((color) => {
              return color !== filterColor;
            });
            setFilterColors(sameColorFlter);
          } else {
            copy.push(filterColor);
            setFilterColors(copy);
          }
        }}
      />
    </div>
  );
};
export default ColorFilter;
