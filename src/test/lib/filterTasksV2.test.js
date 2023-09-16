import filterTasksV2 from "../../lib/filterTasksV2";

describe("filterTasksV2", () => {
  it("by incomplete status and by one color", () => {
    const tasks = [
      { text: "watchTV", completed: false, color: "green" },
      { text: "play Football", completed: false, color: "blue" },
      { text: "play piano", completed: true, color: "black" },
    ];
    const filterStatus = "incomplete";
    const filterColors = ["green"];
    const result = filterTasksV2(tasks, filterStatus, filterColors);
    const expectedResult = [
      { text: "watchTV", completed: false, color: "green" },
    ];
    expect(expectedResult).toEqual(result);
  });

  it("by incomplete status and by two colors", () => {
    const tasks = [
      { text: "watchTV", completed: false, color: "green" },
      { text: "play Football", completed: false, color: "blue" },
      { text: "play piano", completed: true, color: "black" },
    ];
    const filterStatus = "incomplete";
    const filterColors = ["green", "blue"];
    const result = filterTasksV2(tasks, filterStatus, filterColors);
    const expectedResult = [
      { text: "watchTV", completed: false, color: "green" },
      { text: "play Football", completed: false, color: "blue" },
    ];
    expect(expectedResult).toEqual(result);
  });

  xit("by completed status, color empty means no colorfilter", () => {
    const tasks = [
      { text: "watchTV", completed: false, color: "green" },
      { text: "play Football", completed: false, color: "blue" },
      { text: "play piano", completed: true, color: "black" },
    ];
    const filterStatus = "incomplete";
    const filterColors = [];
    const result = filterTasksV2(tasks, filterStatus, filterColors);
    const expectedResult = [
      { text: "play piano", completed: true, color: "black" },
    ];
    expect(expectedResult).toEqual(result);
  });
});
