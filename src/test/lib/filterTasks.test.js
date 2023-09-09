import filterTasks from "../../lib/filterTasks";

describe("filterTasks", () => {
  it("by incomplete status", () => {
    const tasks = [
      { text: "watchTV", completed: false },
      { text: "play Football", completed: false },
      { text: "play piano", completed: true },
    ];
    const filterStatus = "incomplete";
    const result = filterTasks(tasks, filterStatus);
    const expectedResult = [
      { text: "watchTV", completed: false },
      { text: "play Football", completed: false },
    ];
    expect(expectedResult).toEqual(result);
  });

  it("by completed status", () => {
    const tasks = [
      { text: "watchTV", completed: false },
      { text: "play Football", completed: false },
      { text: "play piano", completed: true },
    ];
    const filterStatus = "completed";
    const result = filterTasks(tasks, filterStatus);
    const expectedResult = [{ text: "play piano", completed: true }];
    expect(expectedResult).toEqual(result);
  });

  it("by all status", () => {
    const tasks = [
      { text: "watchTV", completed: false },
      { text: "play Football", completed: false },
      { text: "play piano", completed: true },
    ];
    const filterStatus = "all";
    const result = filterTasks(tasks, filterStatus);
    const expectedResult = [
      { text: "watchTV", completed: false },
      { text: "play Football", completed: false },
      { text: "play piano", completed: true },
    ];
    expect(expectedResult).toEqual(result);
  });
});
