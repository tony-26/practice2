import _ from "lodash";
const ColorFilter = ({ filterColor, filterColors, setFilterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        onClick={() => {
          const copy = _.cloneDeep(filterColors);

          copy.push(filterColor);
          setFilterColors(copy);
        }}
      />
    </div>
  );
};
export default ColorFilter;
// make black color add into array
