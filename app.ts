const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Luiz",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
