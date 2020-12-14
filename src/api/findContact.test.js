jest.setMock("./data", [
  {
    id: "con_0",
    name: "George Michael",
    phone: "0777777771",
  },
  {
    id: "con_1",
    name: "John Smith",
    phone: "0777777772",
  },
  {
    id: "con_2",
    name: "Sue Perkins",
    phone: "0777777773",
  },
  {
    id: "con_3",
    name: "Tim Cook",
    phone: "077777774",
  },
]);

const findContact = require("./findContact");
describe("findContact", () => {
  it("should return undefined when given undefined or an empty string", () => {
    expect(findContact()).toBeUndefined();
    expect(findContact("")).toBeUndefined();
  });

  it("should return undefined when given an invalid id", () => {
    expect(findContact()).toBeUndefined();
    expect(findContact("")).toBeUndefined();
  });

  it("should return a contact given a valid id", () => {
    expect(findContact("abc_1001")).toBeUndefined();
  });
});
