const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

beforeEach(() => {
  userController.users = [];
});

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("add user to userController", () => {
  let user = new User(4567, "Kevin", "kevin@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("remove user to userController", () => {
  let user = new User(4567, "Kevin", "kevin@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("find User By E mail", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  let foundUser = userController.findByEmail("santiago@generation.org");
  expect(foundUser).toBe(user);
});

test("find User By E mail", () => {
  let user = new User(4567, "Kevin", "kevin@generation.org");
  userController.add(user);
  let foundUser = userController.findByEmail("kevin@generation.org");
  expect(foundUser).toEqual(user);
});

test("find User By ID", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  let foundUser = userController.findById(1234);
  expect(foundUser).toBe(user);
});

test("find User By ID", () => {
  let user = new User(4567, "Kevin", "kevin@generation.org");
  userController.add(user);
  let foundUser = userController.findById(4567);
  expect(foundUser).toEqual(user);
});
