
/**
 *  가짜 데이터 편하게 만들라고, 그냥 제가 만등것
 */

import fs from "fs/promises";
import { Faker , ko } from '@faker-js/faker';;
 
const faker = new Faker({
        locale: [ko],
});
 
 
const person = faker.person;
const image = faker.image;
 
const fileName = "db.json";
const myDB = {};
myDB.idols = [];
Object.preventExtensions(myDB); // 확장불가
 
for (let i = 1; i <= 20; i++) {
  let idol = {
    id: faker.helpers.fromRegExp("I[0-9][0-9]"),
    name: `${person.lastName()}${person.firstName()}`,
    age: Math.round(Math.random() * 10) + 14,
    avatar: image.avatar(),
  };
  myDB.idols.push(idol);
}
 
fs.writeFile(fileName, JSON.stringify(myDB));
