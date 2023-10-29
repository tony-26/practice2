import _ from "lodash";
import { ref, set } from "firebase/database";
import { database } from "../firebase";

const ColorFilter = ({ filterColor, setFilterColors, filterColors }) => {
  return (
    <div>
      <span>{filterColor}</span>
      <input
        type="checkbox"
        checked={filterColors.includes(filterColor)}
        onChange={() => {
          let copy = _.cloneDeep(filterColors);
          if (filterColors.includes(filterColor)) {
            copy = copy.filter((color) => color !== filterColor);
          } else {
            copy.push(filterColor);
          }
          setFilterColors(copy);
          set(ref(database, "/filterColors"), copy);
        }}
      />
    </div>
  );
};
export default ColorFilter;
