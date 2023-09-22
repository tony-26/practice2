import _ from "lodash";
const ColorFilter = ({ filterColor, filterColors, setFilterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        onClick={() => {
          const copy = _.cloneDeep(filterColors);
          console.log({ copy, filterColors, filterColor });
          // copy.push(filterColor);
          // setFilterColors(copy);
          // console.log(filterColors);
        }}
      />
    </div>
  );
};
export default ColorFilter;
// make black color add into array
