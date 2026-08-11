// cSpell:disable

/*
========================================
Level 1 – Variables & Types
========================================

Questions:

1. fullName, age, isStudent নামে তিনটি variable তৈরি করো
   এবং সঠিক TypeScript type দাও।

2. favoriteFoods নামে একটি string[] array তৈরি করো।

3. scores নামে একটি number[] array তৈরি করো
   এবং সব score-এর যোগফল বের করো।

Answers:
*/

const fullName: string = "Rayhan";
const age: number = 24;
const isStudent: boolean = true;

const favoriteFoods: string[] = [
  "Pizza",
  "Burger",
  "Chicken",
];

const scores: number[] = [80, 90, 100];

const totalScore: number = scores.reduce(
  (sum, score) => sum + score,
  0
);

console.log(totalScore);

/*
========================================
Level 2 – Functions
========================================

Questions:

1. add(a, b) function লিখো যা দুইটি number যোগ করবে।

2. isEven(num) function লিখো যা boolean return করবে।

3. greet(name) function লিখো।
   name না দিলে "Hello Guest" return করবে।

Answers:
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

Questions:

1. নিচের মতো একটি User type তৈরি করো:

   id: number
   name: string
   email: string

2. একটি user object তৈরি করো।

3. printUser(user: User) function লিখো
   যা user-এর information console-এ দেখাবে।

Answers:
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

Questions:

1. User[] type-এর একটি array তৈরি করো।

2. কমপক্ষে ৩ জন user যোগ করো।

3. এমন একটি function লিখো যা User[]
   থেকে নির্দিষ্ট id-এর user খুঁজে বের করবে।

Answers:
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

function getUserById(
  list: User[],
  id: number
): User | undefined {
  return list.find((user) => user.id === id);
}

console.log(getUserById(users, 2));

/*
========================================
Level 5 – Optional & Union Types
========================================

Questions:

1. নিচের Product type তৈরি করো:

   id: number
   name: string
   price: number
   discount?: number

2. দুইটি product তৈরি করো।
   একটি discount সহ এবং একটি discount ছাড়া।

3. এমন একটি function লিখো যার parameter হবে:

   string | number

   string হলে তার length return করবে।
   number হলে তার square return করবে।

Answers:
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

Questions:

1. Car নামে একটি interface তৈরি করো যেখানে থাকবে:

   brand: string
   model: string
   year: number

2. একটি car object তৈরি করো।

Answers:
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

Questions:

1. identity(value) নামে একটি generic function লিখো।

2. function-টি যেই value পাবে,
   সেটাই একই type-এ return করবে।

Test:

identity(10);
identity("Hello");
identity(true);

Answers:
*/

function identity<T>(value: T): T {
  return value;
}

console.log(identity(10));
console.log(identity("Hello"));
console.log(identity(true));

/*
========================================
Level 8 – Basic Task Manager
========================================

Questions:

একটি Task Manager বানাও।

প্রতিটি Task হবে:

id: number
title: string
completed: boolean

নিচের functionগুলো লিখো:

1. addTask()
2. deleteTask()
3. toggleTask()
4. getTaskById()
5. showAllTasks()

Answers:
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
  const index = tasks.findIndex(
    (task) => task.id === id
  );

  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function toggleTask(id: number): void {
  const task = tasks.find(
    (task) => task.id === id
  );

  if (task) {
    task.completed = !task.completed;
  }
}

function getTaskById(
  id: number
): Task | undefined {
  return tasks.find(
    (task) => task.id === id
  );
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

/*
========================================
Level 9 – Tuple
========================================

Questions:

1. PersonInfo নামে একটি tuple type তৈরি করো যেখানে:

   - প্রথম value হবে string
   - দ্বিতীয় value হবে number
   - তৃতীয় value হবে boolean

2. একটি person tuple তৈরি করো।

Answers:
*/

type PersonInfo = [string, number, boolean];

const person: PersonInfo = [
  "Rayhan",
  24,
  true,
];

console.log(person);

/*
========================================
Level 10 – Readonly
========================================

Questions:

1. UserInfo নামে একটি type তৈরি করো।

2. এতে থাকবে:

   readonly id: number
   name: string
   email: string

3. একটি object তৈরি করো।

4. name পরিবর্তন করো।

5. id পরিবর্তন করার চেষ্টা করো।

Answers:
*/

type UserInfo = {
  readonly id: number;
  name: string;
  email: string;
};

const userInfo: UserInfo = {
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
};

userInfo.name = "Rahim";

// userInfo.id = 2;
// ❌ Error

console.log(userInfo);

/*
========================================
Level 11 – Literal Types
========================================

Questions:

1. OrderStatus নামে একটি type তৈরি করো।

এর value শুধুমাত্র হতে পারবে:

   "pending"
   "shipped"
   "delivered"

2. Order নামে একটি type তৈরি করো।

3. একটি order object তৈরি করো।

4. order-এর status পরিবর্তন করে "shipped" করো।

Answers:
*/

type OrderStatus =
  | "pending"
  | "shipped"
  | "delivered";

type Order = {
  id: number;
  product: string;
  status: OrderStatus;
};

const order: Order = {
  id: 1,
  product: "Laptop",
  status: "pending",
};

order.status = "shipped";

// order.status = "cancelled";
// ❌ Error

console.log(order);

/*
========================================
Level 12 – Function Type
========================================

Questions:

1. MathFunction নামে একটি function type তৈরি করো।

2. Function-এ দুইটি number parameter থাকবে।

3. Function number return করবে।

4. এই type ব্যবহার করে:

   addNumbers()
   multiplyNumbers()

   function তৈরি করো।

Answers:
*/

type MathFunction = (
  a: number,
  b: number
) => number;

const addNumbers: MathFunction = (
  a,
  b
) => {
  return a + b;
};

const multiplyNumbers: MathFunction = (
  a,
  b
) => {
  return a * b;
};

console.log(addNumbers(10, 20));
console.log(multiplyNumbers(10, 20));

/*
========================================
Level 13 – Type Narrowing
========================================

Questions:

1. processValue() function তৈরি করো।

2. parameter হবে:

   string | number | boolean

3. string হলে uppercase করবে।

4. number হলে 2 দিয়ে multiply করবে।

5. boolean হলে Yes অথবা No দেখাবে।

Answers:
*/

function processValue(
  value: string | number | boolean
): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value ? "Yes" : "No");
  }
}

processValue("hello");
processValue(10);
processValue(true);

/*
========================================
Level 14 – Intersection Type
========================================

Questions:

1. Person type তৈরি করো:

   name
   age

2. Employee type তৈরি করো:

   employeeId
   department

3. & operator ব্যবহার করে
   EmployeePerson type তৈরি করো।

4. একটি employee object তৈরি করো।

Answers:
*/

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Rayhan",
  age: 24,
  employeeId: 101,
  department: "IT",
};

console.log(employee);

/*
========================================
Level 15 – keyof
========================================

Questions:

Student type:

   name: string
   age: number
   grade: string

একটি function তৈরি করো:

getStudentProperty()

যেখানে property হিসেবে শুধুমাত্র
Student-এর valid key গ্রহণ করা যাবে।

Answers:
*/

type Student = {
  name: string;
  age: number;
  grade: string;
};

const student: Student = {
  name: "Rayhan",
  age: 24,
  grade: "A",
};

function getStudentProperty(
  student: Student,
  property: keyof Student
): string | number {
  return student[property];
}

console.log(
  getStudentProperty(student, "name")
);

console.log(
  getStudentProperty(student, "age")
);

console.log(
  getStudentProperty(student, "grade")
);

// getStudentProperty(student, "salary");
// ❌ Error

/*
========================================
Level 16 – Generic Array Function
========================================

Questions:

1. getFirst() নামে generic function তৈরি করো।

2. এটি যেকোনো array গ্রহণ করবে।

3. array-এর প্রথম element return করবে।

4. Empty array হলে undefined return করবে।

Test:

getFirst([10, 20, 30])
getFirst(["A", "B", "C"])
getFirst([true, false])

Answers:
*/

function getFirst<T>(
  items: T[]
): T | undefined {
  return items[0];
}

console.log(getFirst([10, 20, 30]));
console.log(getFirst(["A", "B", "C"]));
console.log(getFirst([true, false]));

/*
========================================
Level 17 – Generic Object Function
========================================

Questions:

1. একটি generic getProperty() function তৈরি করো।

2. এটি object এবং object-এর key গ্রহণ করবে।

3. key-এর value return করবে।

Answers:
*/

function getProperty<
  T,
  K extends keyof T
>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

const personData = {
  name: "Rayhan",
  age: 24,
  email: "rayhan@mail.com",
};

console.log(
  getProperty(personData, "name")
);

console.log(
  getProperty(personData, "age")
);

console.log(
  getProperty(personData, "email")
);

// getProperty(personData, "salary");
// ❌ Error

/*
========================================
Level 18 – Optional Property
========================================

Questions:

Profile type তৈরি করো:

   name: string
   age: number
   phone?: string
   address?: string

তারপর:

1. phone/address ছাড়া একটি profile তৈরি করো।

2. phone/address সহ আরেকটি profile তৈরি করো।

Answers:
*/

type Profile = {
  name: string;
  age: number;
  phone?: string;
  address?: string;
};

const profile1: Profile = {
  name: "Rayhan",
  age: 24,
};

const profile2: Profile = {
  name: "Rahim",
  age: 25,
  phone: "01700000000",
  address: "Dhaka",
};

console.log(profile1);
console.log(profile2);

/*
========================================
Level 19 – Enum
========================================

Questions:

1. Role নামে একটি enum তৈরি করো:

   Admin
   User
   Moderator

2. Account type তৈরি করো:

   name
   role

3. একটি account object তৈরি করো।

4. যদি role Admin হয়,
   "User is an admin" দেখাও।

Answers:
*/

enum Role {
  Admin = "admin",
  User = "user",
  Moderator = "moderator",
}

type Account = {
  name: string;
  role: Role;
};

const account: Account = {
  name: "Rayhan",
  role: Role.Admin,
};

console.log(account);

if (account.role === Role.Admin) {
  console.log("User is an admin");
}

/*
========================================
Level 20 – Discriminated Union
========================================

Questions:

একটি API response type তৈরি করো।

Response তিন ধরনের হতে পারবে:

1. success
   status: "success"
   data: string[]

2. error
   status: "error"
   message: string

3. loading
   status: "loading"

তারপর handleResponse() function তৈরি করো।

Answers:
*/

type ApiResponse =
  | {
      status: "success";
      data: string[];
    }
  | {
      status: "error";
      message: string;
    }
  | {
      status: "loading";
    };

function handleResponse(
  response: ApiResponse
): void {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else if (response.status === "error") {
    console.log(
      "Error:",
      response.message
    );
  } else {
    console.log("Loading...");
  }
}

handleResponse({
  status: "success",
  data: ["Apple", "Banana"],
});

handleResponse({
  status: "error",
  message: "Something went wrong",
});

handleResponse({
  status: "loading",
});

/*
========================================
Level 21 – Partial
========================================

Questions:

1. UserData type তৈরি করো:

   id
   name
   email

2. Partial<UserData> ব্যবহার করে
   এমন একটি object তৈরি করো যেখানে
   শুধু name থাকবে।

Answers:
*/

type UserData = {
  id: number;
  name: string;
  email: string;
};

const updateUser: Partial<UserData> = {
  name: "Rayhan",
};

console.log(updateUser);

/*
========================================
Level 22 – Pick
========================================

Questions:

UserData থেকে শুধুমাত্র:

   name
   email

নিয়ে UserPreview type তৈরি করো।

Answers:
*/

type UserPreview = Pick<
  UserData,
  "name" | "email"
>;

const preview: UserPreview = {
  name: "Rayhan",
  email: "rayhan@mail.com",
};

console.log(preview);

/*
========================================
Level 23 – Omit
========================================

Questions:

UserData থেকে id বাদ দিয়ে
UserWithoutId type তৈরি করো।

Answers:
*/

type UserWithoutId = Omit<
  UserData,
  "id"
>;

const newUser: UserWithoutId = {
  name: "Rayhan",
  email: "rayhan@mail.com",
};

console.log(newUser);

/*
========================================
Level 24 – Record
========================================

Questions:

Record ব্যবহার করে এমন একটি type তৈরি করো
যেখানে:

   admin: number
   user: number
   moderator: number

তারপর একটি object তৈরি করো।

Answers:
*/

type UserCount = Record<
  "admin" | "user" | "moderator",
  number
>;

const usersCount: UserCount = {
  admin: 5,
  user: 100,
  moderator: 10,
};

console.log(usersCount);

/*
========================================
Level 25 – Real-world API Data
========================================

Questions:

একটি API Product type তৈরি করো:

   id: number
   title: string
   price: number
   category: string
   inStock: boolean

তারপর:

1. কমপক্ষে ৩টি product তৈরি করো।

2. filter() ব্যবহার করে
   শুধুমাত্র inStock products বের করো।

Answers:
*/

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  inStock: boolean;
};

const products: ApiProduct[] = [
  {
    id: 1,
    title: "Laptop",
    price: 80000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    title: "Phone",
    price: 30000,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 3,
    title: "Keyboard",
    price: 3000,
    category: "Accessories",
    inStock: true,
  },
];

const availableProducts: ApiProduct[] =
  products.filter(
    (product) => product.inStock
  );

console.log(availableProducts);

/*
========================================
Level 26 – Advanced Task Manager
========================================

Questions:

Task-এর সাথে priority যোগ করো।

Priority হতে পারবে:

   "low"
   "medium"
   "high"

Task হবে:

   id: number
   title: string
   completed: boolean
   priority: Priority

নিচের functionগুলো লিখো:

1. createTask()
2. removeTask()
3. changeTaskStatus()
4. findTaskById()
5. getTasksByPriority()
6. showCompletedTasks()
7. showAllTaskItems()

Answers:
*/

type Priority =
  | "low"
  | "medium"
  | "high";

type TaskItem = {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
};

const taskList: TaskItem[] = [];

let taskId = 1;

function createTask(
  title: string,
  priority: Priority
): void {
  taskList.push({
    id: taskId++,
    title,
    completed: false,
    priority,
  });
}

function removeTask(id: number): void {
  const index = taskList.findIndex(
    (task) => task.id === id
  );

  if (index !== -1) {
    taskList.splice(index, 1);
  }
}

function changeTaskStatus(id: number): void {
  const task = taskList.find(
    (task) => task.id === id
  );

  if (task) {
    task.completed = !task.completed;
  }
}

function findTaskById(
  id: number
): TaskItem | undefined {
  return taskList.find(
    (task) => task.id === id
  );
}

function getTasksByPriority(
  priority: Priority
): TaskItem[] {
  return taskList.filter(
    (task) => task.priority === priority
  );
}

function showCompletedTasks(): TaskItem[] {
  return taskList.filter(
    (task) => task.completed
  );
}

function showAllTaskItems(): void {
  console.log("All Tasks:", taskList);
}

// Demo

createTask(
  "Learn TypeScript",
  "high"
);

createTask(
  "Practice Generics",
  "medium"
);

createTask(
  "Build Project",
  "high"
);

createTask(
  "Read Documentation",
  "low"
);

changeTaskStatus(1);
changeTaskStatus(3);

console.log(
  "Task by ID:",
  findTaskById(3)
);

console.log(
  "High Priority:",
  getTasksByPriority("high")
);

console.log(
  "Completed:",
  showCompletedTasks()
);

removeTask(2);

showAllTaskItems();


/*
========================================
Level 27 – ReturnType
========================================

Questions:

1. getUser() নামে একটি function তৈরি করো।

2. Function-টি নিচের object return করবে:

   id: number
   name: string
   email: string

3. ReturnType<typeof getUser> ব্যবহার করে
   UserResult নামে একটি type তৈরি করো।

4. UserResult type ব্যবহার করে
   একটি user object তৈরি করো।

Answers:
*/

function getUser() {
  return {
    id: 1,
    name: "Rayhan",
    email: "rayhan@mail.com",
  };
}

type UserResult = ReturnType<typeof getUser>;

const userResult: UserResult = {
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
};

console.log(userResult);

/*
========================================
Level 28 – Parameters
========================================

Questions:

1. createProduct() নামে একটি function তৈরি করো।

2. Function-এর parameter হবে:

   name: string
   price: number
   inStock: boolean

3. Parameters<typeof createProduct>
   ব্যবহার করে ProductParams type তৈরি করো।

4. ProductParams type ব্যবহার করে
   একটি array তৈরি করো।

5. Array-এর values ব্যবহার করে
   createProduct() function call করো।

Answers:
*/

function createProduct(
  name: string,
  price: number,
  inStock: boolean
) {
  return {
    name,
    price,
    inStock,
  };
}

type ProductParams = Parameters<
  typeof createProduct
>;

const productParams: ProductParams = [
  "Laptop",
  80000,
  true,
];

console.log(
  createProduct(...productParams)
);

/*
========================================
Level 29 – Generic API Response
========================================

Questions:

1. একটি generic ApiResponse<T> type তৈরি করো।

2. এতে থাকবে:

   success: boolean
   data: T
   message: string

3. ApiResponse<string[]> ব্যবহার করে
   একটি response তৈরি করো।

4. ApiResponse<User> ব্যবহার করে
   আরেকটি response তৈরি করো।

5. দুইটি response-এর data
   console-এ দেখাও।

Answers:
*/

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

const productResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Laptop", "Phone", "Keyboard"],
  message: "Products fetched successfully",
};

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Rayhan",
    email: "rayhan@mail.com",
  },
  message: "User fetched successfully",
};

console.log(productResponse.data);
console.log(userResponse.data);

/*
========================================
Level 30 – Generic CRUD
========================================

Questions:

1. একটি generic Repository<T> type/class তৈরি করো।

2. এর মধ্যে নিচের methodগুলো থাকবে:

   add(item: T)
   getAll(): T[]
   getById(id: number): T | undefined
   remove(id: number): void

3. User type ব্যবহার করে
   একটি Repository তৈরি করো।

4. কমপক্ষে ৩টি user add করো।

5. সব user দেখাও।

6. নির্দিষ্ট ID-এর user খুঁজে বের করো।

7. একটি user delete করো।

8. আবার সব user দেখাও।

Answers:
*/

class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: number): T | undefined {
    return this.items.find(
      (item) => item.id === id
    );
  }

  remove(id: number): void {
    const index = this.items.findIndex(
      (item) => item.id === id
    );

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const userRepository = new Repository<User>();

userRepository.add({
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
});

userRepository.add({
  id: 2,
  name: "Rahim",
  email: "rahim@mail.com",
});

userRepository.add({
  id: 3,
  name: "Karim",
  email: "karim@mail.com",
});

console.log("All Users:");
console.log(userRepository.getAll());

console.log("User by ID:");
console.log(userRepository.getById(2));

userRepository.remove(1);

console.log("After Delete:");
console.log(userRepository.getAll());

/*
========================================
Level 31 – Mini Shopping Cart
========================================

Questions:

1. CartItem নামে একটি type তৈরি করো।

2. এতে থাকবে:

   id: number
   name: string
   price: number
   quantity: number

3. একটি CartItem[] array তৈরি করো।

4. নিচের functionগুলো লিখো:

   addToCart()
   removeFromCart()
   updateQuantity()
   getCartTotal()
   getCartItems()
   clearCart()

5. addToCart() product cart-এ যোগ করবে।

6. একই product আবার add করলে
   নতুন item তৈরি না করে
   quantity বাড়াবে।

7. removeFromCart() ID দিয়ে
   product remove করবে।

8. updateQuantity() দিয়ে
   product-এর quantity পরিবর্তন করবে।

9. getCartTotal() দিয়ে
   সব product-এর:

   price × quantity

   হিসাব করে total বের করবে।

10. getCartItems() দিয়ে
    সব cart item return করবে।

11. clearCart() দিয়ে
    পুরো cart empty করবে।

Test:

Laptop → 80000 → quantity 1
Mouse → 1500 → quantity 2
Keyboard → 3000 → quantity 1

তারপর:

1. Laptop-এর quantity 2 করো।
2. Mouse remove করো।
3. Final cart দেখাও।
4. Final cart total বের করো।

Answers:
*/

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cart: CartItem[] = [];

function addToCart(
  id: number,
  name: string,
  price: number,
  quantity: number
): void {
  const existingItem = cart.find(
    (item) => item.id === id
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id,
      name,
      price,
      quantity,
    });
  }
}

function removeFromCart(id: number): void {
  const index = cart.findIndex(
    (item) => item.id === id
  );

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function updateQuantity(
  id: number,
  quantity: number
): void {
  const item = cart.find(
    (item) => item.id === id
  );

  if (item) {
    item.quantity = quantity;
  }
}

function getCartTotal(): number {
  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
}

function getCartItems(): CartItem[] {
  return cart;
}

function clearCart(): void {
  cart.length = 0;
}

// Demo

addToCart(
  1,
  "Laptop",
  80000,
  1
);

addToCart(
  2,
  "Mouse",
  1500,
  2
);

addToCart(
  3,
  "Keyboard",
  3000,
  1
);

// Laptop quantity 2
updateQuantity(1, 2);

// Mouse remove
removeFromCart(2);

console.log("Cart Items:");
console.log(getCartItems());

console.log("Cart Total:");
console.log(getCartTotal());

// clearCart();
// console.log(getCartItems());


# /*

# Level 32 – Readonly Array

Questions:

1. একটি readonly number[] array তৈরি করো।

2. এতে ৫টি number রাখো।

3. array-এর প্রথম element console-এ দেখাও।

4. array-তে নতুন element যোগ করার চেষ্টা করো।

5. element পরিবর্তন করার চেষ্টা করো।

Answers:
*/

const readonlyScores: readonly number[] = [
80,
85,
90,
95,
100,
];

console.log(readonlyScores[0]);

// readonlyScores.push(110);
// ❌ Error

// readonlyScores[0] = 70;
// ❌ Error

# /*

# Level 33 – Null & Undefined

Questions:

1. username নামে একটি variable তৈরি করো।

2. এর type হবে:

   string | null

3. username-এর value null রাখো।

4. একটি function তৈরি করো:

   printUsername()

5. username null হলে
   "No username" দেখাবে।

6. username থাকলে
   username console-এ দেখাবে।

Answers:
*/

let username: string | null = null;

function printUsername(
username: string | null
): void {
if (username === null) {
console.log("No username");
} else {
console.log(username);
}
}

printUsername(username);

username = "Rayhan";

printUsername(username);

# /*

# Level 34 – Type Guard Function

Questions:

1. isString() নামে একটি function তৈরি করো।

2. parameter হবে:

   unknown

3. function-এর return type হবে:

   value is string

4. value string হলে true return করবে।

5. অন্য type হলে false return করবে।

6. function ব্যবহার করে একটি value
   string কিনা check করো।

Answers:
*/

function isString(
value: unknown
): value is string {
return typeof value === "string";
}

const value: unknown = "TypeScript";

if (isString(value)) {
console.log(value.toUpperCase());
}

# /*

# Level 35 – Function Overloading

Questions:

1. formatValue() নামে একটি function তৈরি করো।

2. এটি string অথবা number গ্রহণ করবে।

3. string দিলে:

   "Value: <string>"

4. number দিলে:

   "Number: <number>"

5. Function overload ব্যবহার করো।

6. দুই ধরনের value দিয়ে function call করো।

Answers:
*/

function formatValue(
value: string
): string;

function formatValue(
value: number
): string;

function formatValue(
value: string | number
): string {
if (typeof value === "string") {
return `Value: ${value}`;
}

return `Number: ${value}`;
}

console.log(formatValue("Hello"));
console.log(formatValue(100));

# /*

# Level 36 – Readonly Object

Questions:

1. ProductInfo নামে একটি type তৈরি করো।

2. এতে থাকবে:

   readonly id: number
   name: string
   price: number

3. একটি product object তৈরি করো।

4. name পরিবর্তন করো।

5. id পরিবর্তন করার চেষ্টা করো।

Answers:
*/

type ProductInfo = {
readonly id: number;
name: string;
price: number;
};

const productInfo: ProductInfo = {
id: 1,
name: "Laptop",
price: 80000,
};

productInfo.name = "Gaming Laptop";

// productInfo.id = 2;
// ❌ Error

console.log(productInfo);

# /*

# Level 37 – Map & Typed Array

Questions:

1. ProductItem নামে একটি type তৈরি করো।

2. এতে থাকবে:

   id: number
   name: string
   price: number

3. কমপক্ষে ৩টি product তৈরি করো।

4. map() ব্যবহার করে
   শুধু product-এর name-এর একটি string[]
   তৈরি করো।

5. names console-এ দেখাও।

Answers:
*/

type ProductItem = {
id: number;
name: string;
price: number;
};

const productItems: ProductItem[] = [
{
id: 1,
name: "Laptop",
price: 80000,
},
{
id: 2,
name: "Mouse",
price: 1500,
},
{
id: 3,
name: "Keyboard",
price: 3000,
},
];

const productNames: string[] =
productItems.map(
(product) => product.name
);

console.log(productNames);

# /*

# Level 38 – Utility Type Record with Objects

Questions:

1. Role নামে একটি union type তৈরি করো:

   "admin"
   "user"
   "moderator"

2. UserRoleInfo নামে একটি type তৈরি করো
   Record ব্যবহার করে।

3. প্রতিটি role-এর জন্য থাকবে:

   count: number
   description: string

4. একটি object তৈরি করো।

5. admin-এর count console-এ দেখাও।

Answers:
*/

type UserRole =
| "admin"
| "user"
| "moderator";

type UserRoleInfo = Record<
UserRole,
{
count: number;
description: string;
}

> ;

const roleInfo: UserRoleInfo = {
admin: {
count: 5,
description: "System administrators",
},

user: {
count: 100,
description: "Normal users",
},

moderator: {
count: 10,
description: "Content moderators",
},
};

console.log(roleInfo.admin.count);

# /*

# Level 39 – Generic Search Function

Questions:

1. একটি generic findById() function তৈরি করো।

2. Function-টি এমন object-এর array
   গ্রহণ করবে যার মধ্যে id থাকবে।

3. Function-এর parameter হবে:

   list
   id

4. নির্দিষ্ট id-এর object return করবে।

5. না পেলে undefined return করবে।

6. User type ব্যবহার করে test করো।

Answers:
*/

function findById<
T extends { id: number }

> (
> list: T[],
> id: number
> ): T | undefined {
> return list.find(
> (item) => item.id === id
> );
> }

const userList: User[] = [
{
id: 1,
name: "Rayhan",
email: "[rayhan@mail.com](mailto:rayhan@mail.com)",
},

{
id: 2,
name: "Rahim",
email: "[rahim@mail.com](mailto:rahim@mail.com)",
},

{
id: 3,
name: "Karim",
email: "[karim@mail.com](mailto:karim@mail.com)",
},
];

console.log(
findById(userList, 2)
);

# /*

# Level 40 – Update Object with Partial

Questions:

1. UserProfile নামে একটি type তৈরি করো।

2. এতে থাকবে:

   id: number
   name: string
   email: string
   age: number

3. updateUser() নামে একটি function তৈরি করো।

4. Function-এর parameter হবে:

   user: UserProfile
   updates: Partial<UserProfile>

5. Function user-এর information update করবে।

6. একটি user তৈরি করো।

7. শুধু name এবং age update করো।

Answers:
*/

type UserProfile = {
id: number;
name: string;
email: string;
age: number;
};

function updateUser(
user: UserProfile,
updates: Partial<UserProfile>
): UserProfile {
return {
...user,
...updates,
};
}

const currentUser: UserProfile = {
id: 1,
name: "Rayhan",
email: "[rayhan@mail.com](mailto:rayhan@mail.com)",
age: 24,
};

const updatedUser = updateUser(
currentUser,
{
name: "Md. Rayhan",
age: 25,
}
);

console.log(updatedUser);

# /*

# Level 41 – Generic Data Manager

Questions:

1. একটি generic DataManager<T> class তৈরি করো।

2. T-এর মধ্যে অবশ্যই থাকবে:

   id: number

3. Class-এর মধ্যে থাকবে:

   add()
   getAll()
   getById()
   update()
   remove()

4. update() method ব্যবহার করে
   Partial<T> দিয়ে data update করো।

5. User type ব্যবহার করে
   একটি DataManager তৈরি করো।

6. কমপক্ষে ৩টি user add করো।

7. একটি user-এর name update করো।

8. একটি user-এর email update করো।

9. একটি user remove করো।

10. সব user console-এ দেখাও।

Answers:
*/

class DataManager<
T extends { id: number }

> {
> private items: T[] = [];

add(item: T): void {
this.items.push(item);
}

getAll(): T[] {
return this.items;
}

getById(
id: number
): T | undefined {
return this.items.find(
(item) => item.id === id
);
}

update(
id: number,
updates: Partial<T>
): void {
const item = this.getById(id);

```
if (item) {
  Object.assign(item, updates);
}
```

}

remove(id: number): void {
const index = this.items.findIndex(
(item) => item.id === id
);

```
if (index !== -1) {
  this.items.splice(index, 1);
}
```

}
}

// Demo

const userManager =
new DataManager<User>();

userManager.add({
id: 1,
name: "Rayhan",
email: "[rayhan@mail.com](mailto:rayhan@mail.com)",
});

userManager.add({
id: 2,
name: "Rahim",
email: "[rahim@mail.com](mailto:rahim@mail.com)",
});

userManager.add({
id: 3,
name: "Karim",
email: "[karim@mail.com](mailto:karim@mail.com)",
});

// Update user

userManager.update(1, {
name: "Md. Rayhan",
});

userManager.update(2, {
email: "[rahim@gmail.com](mailto:rahim@gmail.com)",
});

// Remove user

userManager.remove(3);

// Show all users

console.log(
"All Users:"
);

console.log(
userManager.getAll()
);

// Find user

console.log(
"User by ID:"
);

console.log(
userManager.getById(1)
);

/*
========================================
# Level 42 – Generic Filter Manager
========================================

Questions:

1. একটি generic FilterManager<T> class তৈরি করো।

2. Class-এর মধ্যে থাকবে:

   add()
   getAll()
   filter()
   remove()

3. filter() method ব্যবহার করে
   নির্দিষ্ট condition অনুযায়ী
   data filter করো।

4. User type ব্যবহার করে
   একটি FilterManager তৈরি করো।

5. কমপক্ষে ৫টি user add করো।

6. যাদের name "R" দিয়ে শুরু
   তাদের খুঁজে বের করো।

7. যাদের age 25-এর বেশি
   তাদের খুঁজে বের করো।

8. একটি user remove করো।

9. সব user console-এ দেখাও।

Answers:
*/

class FilterManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  filter(
    callback: (item: T) => boolean
  ): T[] {
    return this.items.filter(callback);
  }

  remove(
    callback: (item: T) => boolean
  ): void {
    this.items = this.items.filter(
      (item) => !callback(item)
    );
  }
}

// Demo

const userFilterManager =
  new FilterManager<User>();

userFilterManager.add({
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
});

userFilterManager.add({
  id: 2,
  name: "Rahim",
  email: "rahim@mail.com",
});

userFilterManager.add({
  id: 3,
  name: "Karim",
  email: "karim@mail.com",
});

userFilterManager.add({
  id: 4,
  name: "Rafi",
  email: "rafi@mail.com",
});

userFilterManager.add({
  id: 5,
  name: "Sakib",
  email: "sakib@mail.com",
});

console.log("All Users:");
console.log(
  userFilterManager.getAll()
);

console.log("Users starting with R:");

console.log(
  userFilterManager.filter(
    (user) =>
      user.name.startsWith("R")
  )
);

userFilterManager.remove(
  (user) => user.id === 3
);

console.log("After Remove:");

console.log(
  userFilterManager.getAll()
);


/*
========================================
# Level 43 – Generic Sort Manager
========================================

Questions:

1. একটি generic SortManager<T> class তৈরি করো।

2. Class-এর মধ্যে থাকবে:

   add()
   getAll()
   sortBy()

3. sortBy() method ব্যবহার করে
   কোনো property অনুযায়ী data sort করো।

4. Product type তৈরি করো:

   id: number
   name: string
   price: number

5. কমপক্ষে ৫টি product add করো।

6. price অনুযায়ী
   ascending order-এ sort করো।

7. আবার price অনুযায়ী
   descending order-এ sort করো।

8. name অনুযায়ী
   alphabetical order-এ sort করো।

Answers:
*/

type SortProduct = {
  id: number;
  name: string;
  price: number;
};

class SortManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  sortBy(
    callback: (a: T, b: T) => number
  ): T[] {
    return [...this.items].sort(callback);
  }
}

// Demo

const productManager =
  new SortManager<SortProduct>();

productManager.add({
  id: 1,
  name: "Laptop",
  price: 80000,
});

productManager.add({
  id: 2,
  name: "Mouse",
  price: 1500,
});

productManager.add({
  id: 3,
  name: "Keyboard",
  price: 3000,
});

productManager.add({
  id: 4,
  name: "Monitor",
  price: 25000,
});

productManager.add({
  id: 5,
  name: "Phone",
  price: 30000,
});

console.log("All Products:");

console.log(
  productManager.getAll()
);

console.log("Price Ascending:");

console.log(
  productManager.sortBy(
    (a, b) => a.price - b.price
  )
);

console.log("Price Descending:");

console.log(
  productManager.sortBy(
    (a, b) => b.price - a.price
  )
);

console.log("Name Alphabetically:");

console.log(
  productManager.sortBy(
    (a, b) =>
      a.name.localeCompare(b.name)
  )
);


/*
========================================
# Level 44 – Generic Pagination
========================================

Questions:

1. একটি generic Pagination<T> class তৈরি করো।

2. Class-এর মধ্যে থাকবে:

   setItems()
   getPage()
   getTotalPages()
   getTotalItems()

3. Constructor-এ pageSize গ্রহণ করো।

4. User type ব্যবহার করো।

5. কমপক্ষে ১০টি user তৈরি করো।

6. pageSize 3 রাখো।

7. Page 1-এর users দেখাও।

8. Page 2-এর users দেখাও।

9. Total pages বের করো।

10. Total users বের করো।

Answers:
*/

class Pagination<T> {
  private items: T[] = [];

  constructor(
    private pageSize: number
  ) {}

  setItems(items: T[]): void {
    this.items = items;
  }

  getPage(page: number): T[] {
    const start =
      (page - 1) * this.pageSize;

    const end =
      start + this.pageSize;

    return this.items.slice(
      start,
      end
    );
  }

  getTotalPages(): number {
    return Math.ceil(
      this.items.length /
        this.pageSize
    );
  }

  getTotalItems(): number {
    return this.items.length;
  }
}

// Demo

const pagination =
  new Pagination<User>(3);

const paginationUsers: User[] = [
  {
    id: 1,
    name: "Rayhan",
    email: "rayhan@mail.com",
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@mail.com",
  },
  {
    id: 3,
    name: "Karim",
    email: "karim@mail.com",
  },
  {
    id: 4,
    name: "Rafi",
    email: "rafi@mail.com",
  },
  {
    id: 5,
    name: "Sakib",
    email: "sakib@mail.com",
  },
  {
    id: 6,
    name: "Hasan",
    email: "hasan@mail.com",
  },
  {
    id: 7,
    name: "Nabil",
    email: "nabil@mail.com",
  },
  {
    id: 8,
    name: "Fahim",
    email: "fahim@mail.com",
  },
  {
    id: 9,
    name: "Jahid",
    email: "jahid@mail.com",
  },
  {
    id: 10,
    name: "Siam",
    email: "siam@mail.com",
  },
];

pagination.setItems(
  paginationUsers
);

console.log("Page 1:");

console.log(
  pagination.getPage(1)
);

console.log("Page 2:");

console.log(
  pagination.getPage(2)
);

console.log("Total Pages:");

console.log(
  pagination.getTotalPages()
);

console.log("Total Items:");

console.log(
  pagination.getTotalItems()
);


/*
========================================
# Level 45 – Generic Cache Manager
========================================

Questions:

1. একটি generic CacheManager<T> class তৈরি করো।

2. Class-এর মধ্যে থাকবে:

   set()
   get()
   has()
   remove()
   clear()

3. set() method দিয়ে
   key এবং value save করো।

4. get() method দিয়ে
   key অনুযায়ী value return করো।

5. has() method দিয়ে
   key exist করে কিনা check করো।

6. remove() method দিয়ে
   নির্দিষ্ট key remove করো।

7. clear() method দিয়ে
   পুরো cache empty করো।

8. User type ব্যবহার করে
   CacheManager তৈরি করো।

Answers:
*/

class CacheManager<T> {
  private cache = new Map<
    number,
    T
  >();

  set(
    key: number,
    value: T
  ): void {
    this.cache.set(key, value);
  }

  get(
    key: number
  ): T | undefined {
    return this.cache.get(key);
  }

  has(key: number): boolean {
    return this.cache.has(key);
  }

  remove(key: number): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

// Demo

const userCache =
  new CacheManager<User>();

userCache.set(1, {
  id: 1,
  name: "Rayhan",
  email: "rayhan@mail.com",
});

userCache.set(2, {
  id: 2,
  name: "Rahim",
  email: "rahim@mail.com",
});

userCache.set(3, {
  id: 3,
  name: "Karim",
  email: "karim@mail.com",
});

console.log("User 1:");

console.log(
  userCache.get(1)
);

console.log("Has User 2:");

console.log(
  userCache.has(2)
);

userCache.remove(2);

console.log("After Remove:");

console.log(
  userCache.has(2)
);

console.log("User 3:");

console.log(
  userCache.get(3)
);

userCache.clear();

console.log("After Clear:");

console.log(
  userCache.get(1)
);


/*
========================================
# Level 46 – Generic Event Manager
========================================

Questions:

1. একটি generic EventManager<T> class তৈরি করো।

2. Class-এর মধ্যে থাকবে:

   on()
   emit()
   off()

3. on() method দিয়ে
   একটি event-এর জন্য
   callback register করো।

4. emit() method দিয়ে
   event-এর data পাঠাও।

5. off() method দিয়ে
   event-এর callback remove করো।

6. EventManager<string> তৈরি করো।

7. "message" নামে একটি event তৈরি করো।

8. message event-এ একটি callback
   register করো।

9. emit() ব্যবহার করে
   message পাঠাও।

10. Callback remove করার পর
    আবার emit() করো।

Answers:
*/

class EventManager<T> {
  private events = new Map<
    string,
    ((data: T) => void)[]
  >();

  on(
    eventName: string,
    callback: (data: T) => void
  ): void {
    const callbacks =
      this.events.get(eventName) ?? [];

    callbacks.push(callback);

    this.events.set(
      eventName,
      callbacks
    );
  }

  emit(
    eventName: string,
    data: T
  ): void {
    const callbacks =
      this.events.get(eventName) ?? [];

    callbacks.forEach(
      (callback) => callback(data)
    );
  }

  off(
    eventName: string,
    callback: (data: T) => void
  ): void {
    const callbacks =
      this.events.get(eventName) ?? [];

    this.events.set(
      eventName,
      callbacks.filter(
        (item) => item !== callback
      )
    );
  }
}

// Demo

const eventManager =
  new EventManager<string>();

const messageHandler = (
  message: string
): void => {
  console.log(
    "Message:",
    message
  );
};

eventManager.on(
  "message",
  messageHandler
);

eventManager.emit(
  "message",
  "Hello TypeScript!"
);

eventManager.emit(
  "message",
  "Learning Generics"
);

eventManager.off(
  "message",
  messageHandler
);

eventManager.emit(
  "message",
  "This will not be shown"
);
