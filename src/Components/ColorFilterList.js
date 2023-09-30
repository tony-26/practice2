import ColorFilter from "./ColorFilter";

const ColorFilterList = ({ setFilterColors }) => {
  return (
    <div>
      {["black", "green", "red", "purple", "blue"].map((e, i) => {
        return (
          <ColorFilter
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
