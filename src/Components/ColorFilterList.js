import ColorFilter from "./ColorFilter";

const ColorFilterList = ({ filterColors, setFilterColors }) => {
  return (
    <div>
      {["black", "green", "red", "purple", "blue"].map((e, i) => {
        return (
          <ColorFilter
            key={i}
            filterColor={e}
            filterColors={filterColors}
            setFilterColors={setFilterColors}
          />
        );
      })}
    </div>
  );
};
export default ColorFilterList;
