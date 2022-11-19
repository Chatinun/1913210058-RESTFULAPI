const users = [
  {
    name: "Chatinun",
    nickname: "Max",
    hobby: "sleep",
    address: "Pattanakarn 44",
    province: {
      province: "Bangkok",
      postcode: "10250",
    },
  },
  {
    name: "Sumeth",
    nickname: "Touch",
    hobby: "play game",
    address: "Pattanakarn 39",
    province: {
      province: "Bangkok",
      postcode: "10250",
    },
  },
  {
    name: "Thitipun",
    nickname: "Be",
    hobby: "read manga",
    address: "Moon",
    province: {
      province: "Bangkok",
      postcode: "99999",
    },
  },
];

for (const u of users) {
  console.log(`
        My nickname is ${u.nickname}, My Hobby is ${u.hobby}
        and my postcode is ${u.province.postcode}
    `);
}
