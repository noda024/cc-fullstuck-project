/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("match").del();
  await knex("match").insert([
    {
      id: "1",
      name: "cat",
      sex: "men",
      age: 10,
      born: "Hiroshima",
      description: "I am cat",
      good: "2",
      image_path: "cat.png",
    },
    {
      id: "2",
      name: "dog",
      sex: "women",
      age: 11,
      born: "Okayama",
      description: "I am dog",
      good: "1",
      image_path: "dog.png",
    },
    {
      id: "3",
      name: "pig",
      sex: "men",
      age: 12,
      born: "Hiroshima",
      description: "I am pig",
      image_path: "pig.png",
    },
  ]);
};
