/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("match").del();
  await knex("match").insert([
    {
      id: "4",
      name: "ele",
      sex: "men",
      age: 10,
      born: "zoo",
      description: "I am 象",
      good: ["2"],
      image_path: "ele.png",
    },
    {
      id: "5",
      name: "kirin",
      sex: "women",
      age: 11,
      born: "Yokohama",
      description: "I am kirin",
      good: ["5"],
      image_path: "kirin.png",
    },
    {
      id: "6",
      name: "noda",
      sex: "men",
      age: 28,
      born: "Hiroshima",
      description: "初めまして、社内で出会いがないので始めました",
      image_path: "noda.png",
      good: ["6"],
    },
    {
      id: "7",
      name: "shima",
      sex: "women",
      age: 11,
      born: "Okayama",
      description: "I am shima",
      good: ["1"],
      image_path: "shima.png",
    },
    {
      id: "8",
      name: "lion",
      sex: "men",
      age: 12,
      born: "Hiroshima",
      description: "I am lion",
      image_path: "lion.png",
      good: ["7,8"],
    },
  ]);
};
