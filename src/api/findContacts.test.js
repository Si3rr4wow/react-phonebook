jest.setMock("./data", [
  {
    id: "con_1",
    name: "George Michael",
    phone: "0777777771",
  },
  {
    id: "con_2",
    name: "John Smith",
    phone: "0777777772",
  },
  {
    id: "con_3",
    name: "Sue Perkins",
    phone: "0777777773",
  },
  {
    id: "con_4",
    name: "Tim Cook",
    phone: "077777774",
  },
]);

const findContacts = require("./findContacts");
describe("findContacts", () => {
  it("should return an empty array when search str is empty or undefined", () => {
    expect(findContacts()).toEqual([]);
    expect(findContacts("")).toEqual([]);
  });

  it("should return the filtered data according to case-insensitive partial name match", () => {
    expect(findContacts("sue")[0].name).toEqual("Sue Perkins");
    expect(findContacts("i").length).toEqual(4);
    expect(findContacts("o").length).toEqual(3);
    expect(findContacts("**unmatched string**").length).toEqual(0);
  });
});
