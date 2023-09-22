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
          console.log()
        }}
      />
    </div>
  );
};
export default ColorFilter;
// make black color add into array
