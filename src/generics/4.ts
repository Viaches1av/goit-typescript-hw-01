type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserData>) {}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
