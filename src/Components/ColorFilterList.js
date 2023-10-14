import ColorFilter from "./ColorFilter";

const ColorFilterList = ({ setFilterColors, filterColors }) => {
  return (
    <div>
      {["black", "green", "red", "purple", "blue"].map((e, i) => {
        return (
          <ColorFilter
            filterColors={filterColors}
            key={i}
            filterColor={e}
            setFilterColors={setFilterColors}
          />
        );
      })}
    </div>
  );
};
export default ColorFilterList;
