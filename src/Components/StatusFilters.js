const StatusFilters = ({ setFilterStatus }) => (
  <div>
    {["all", "incomplete", "completed"].map((e, i) => (
      <button key={i} onClick={() => setFilterStatus(e)}>
        {e}
      </button>
    ))}
  </div>
);

export default StatusFilters;
