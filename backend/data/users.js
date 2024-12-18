import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: false,
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: false,
  },
];

export default users;
