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
          setFilterColors((filterColors) => {
            let copy = _.cloneDeep(filterColors);
            if (filterColors.includes(filterColor)) {
              copy = copy.filter((color) => color !== filterColor);
            } else {
              copy.push(filterColor);
            }
            set(ref(database, "/filterColors"), copy);
            return copy;
          });
        }}
      />
    </div>
  );
};
export default ColorFilter;
