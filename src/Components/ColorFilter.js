import _ from "lodash";
const ColorFilter = ({ filterColor, setFilterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        onClick={() => {
          setFilterColors((filterColors) => {
            let copy = _.cloneDeep(filterColors);
            if (filterColors.includes(filterColor)) {
              copy = copy.filter((color) => color !== filterColor);
            } else {
              copy.push(filterColor);
            }
            return copy;
          });
        }}
      />
    </div>
  );
};
export default ColorFilter;
