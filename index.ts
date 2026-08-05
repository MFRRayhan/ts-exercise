// cSpell:disable

/*
========================================
Level 1 – Variables & Types
========================================

1. fullName, age, isStudent নামে তিনটি ভেরিয়েবল তৈরি করো এবং সঠিক টাইপ দাও।

2. favoriteFoods নামে একটি string[] অ্যারে তৈরি করো।

3. scores নামে number[] অ্যারে তৈরি করে সব স্কোরের যোগফল বের করো।
*/

const fullName: string = "Rayhan";
const age: number = 24;
const isStudent: boolean = true;

const favoriteFoods: string[] = ["Pizza", "Burger", "Chicken"];

const scores: number[] = [80, 90, 100];
const totalScore = scores.reduce((sum, score) => sum + score, 0);

console.log(totalScore);

/*
========================================
Level 2 – Functions
========================================

1. add(a, b) ফাংশন লিখো যা দুইটি সংখ্যা যোগ করবে।

2. isEven(num) ফাংশন লিখো যা boolean রিটার্ন করবে।

3. greet(name) ফাংশন লিখো।
   যদি name না দেওয়া হয় তাহলে "Hello Guest" রিটার্ন করবে।
*/

function add(a: number, b: number): number {
  return a + b;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function greet(name: string = "Guest"): string {
  return `Hello ${name}`;
}

console.log(add(10, 20));
console.log(isEven(8));
console.log(greet());
console.log(greet("Rayhan"));

/*
========================================
Level 3 – Objects & Type Alias
========================================

1. নিচের মতো একটি টাইপ তৈরি করো:

type User = {
  id: number;
  name: string;
  email: string;
};

2. একটি user অবজেক্ট তৈরি করো।

3. printUser(user: User) নামে ফাংশন লিখো
   যা কনসোলে ইউজারের তথ্য দেখাবে।
*/

type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
};

function printUser(user: User): void {
  console.log(user);
}

printUser(user);

/*
========================================
Level 4 – Arrays of Objects
========================================

1. User[] টাইপের একটি অ্যারে তৈরি করো।

2. কমপক্ষে ৩ জন ইউজার যোগ করো।

3. এমন একটি ফাংশন লিখো যা User[]
   থেকে নির্দিষ্ট id-এর ইউজার খুঁজে বের করবে।
*/

const users: User[] = [
  {
    id: 1,
    name: "Rayhan",
    email: "ray@mail.com",
  },
  {
    id: 2,
    name: "Borhan",
    email: "bor@mail.com",
  },
  {
    id: 3,
    name: "Farhan",
    email: "far@mail.com",
  },
];

function getUserById(list: User[], id: number): User | undefined {
  return list.find((user) => user.id === id);
}

console.log(getUserById(users, 2));

/*
========================================
Level 5 – Optional & Union Types
========================================

1. নিচের টাইপটি তৈরি করো:

type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
};

2. দুইটি প্রোডাক্ট তৈরি করো,
   একটি discount সহ এবং একটি ছাড়া।

3. এমন একটি ফাংশন লিখো যার প্যারামিটার হবে:
   string | number

   যদি string হয় তাহলে তার length দেখাবে,
   আর number হলে তার square দেখাবে।
*/

type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
};

const product1: Product = {
  id: 1,
  name: "Chips",
  price: 20,
  discount: 5,
};

const product2: Product = {
  id: 2,
  name: "Chocolate",
  price: 30,
};

function checkValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }

  return value * value;
}

console.log(checkValue("TypeScript"));
console.log(checkValue(10));

/*
========================================
Level 6 – Interface
========================================

1. interface Car তৈরি করো যেখানে থাকবে:
   - brand
   - model
   - year

2. একটি car অবজেক্ট তৈরি করো।
*/

interface Car {
  brand: string;
  model: string;
  year: number;
}

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
};

console.log(car);

/*
========================================
Level 7 – Generics
========================================

1. Generic ফাংশন লিখো:

identity(value)

যা যেটা পাবে সেটাই রিটার্ন করবে।

উদাহরণ:

identity(10);
identity("Hello");
identity(true);
*/

function identity<T>(value: T): T {
  return value;
}

console.log(identity(10));
console.log(identity("Hello"));
console.log(identity(true));

/*
========================================
Level 8 – Challenge
========================================

একটি Task Manager বানাও।

প্রতিটি Task হবে:

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

নিচের ফাংশনগুলো লিখো:

addTask()
deleteTask()
toggleTask()
getTaskById()
showAllTasks()
*/

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [];

let lastId = 1;

function addTask(title: string): void {
  tasks.push({
    id: lastId++,
    title,
    completed: false,
  });
}

function deleteTask(id: number): void {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function toggleTask(id: number): void {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
  }
}

function getTaskById(id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

function showAllTasks(): void {
  console.log(tasks);
}

// Demo

addTask("Learn TypeScript");
addTask("Practice Generics");
addTask("Build Task Manager");

toggleTask(2);

console.log(getTaskById(2));

deleteTask(1);

showAllTasks();
