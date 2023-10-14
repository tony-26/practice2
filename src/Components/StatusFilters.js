import { ref, set } from "firebase/database";
import { database } from "../firebase";

const StatusFilters = ({ setFilterStatus }) => (
  <div>
    {["all", "incomplete", "completed"].map((e, i) => (
      <button
        key={i}
        onClick={() => {
          setFilterStatus(e);
          set(ref(database, "/filterStatus"), e);
        }}
      >
        {e}
      </button>
    ))}
  </div>
);

export default StatusFilters;
