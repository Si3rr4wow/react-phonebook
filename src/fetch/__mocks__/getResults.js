const contacts = [
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
]

export default function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(contacts));
  });
}
