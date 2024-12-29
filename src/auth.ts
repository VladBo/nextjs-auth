import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";

const guestUser = {
  id: "0",
  name: "Guest",
  email: "",
};

const users = [
  {
    id: "1",
    name: "Test User 1",
    email: "test1@gmail.com",
    password: "password1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Test User 2",
    email: "test2@gmail.com",
    password: "password2",
    image: "https://via.placeholder.com/151",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      id: "guest",
      name: "Guest",
      type: "credentials",
      credentials: {},
      authorize: async () => {
        return guestUser;
      },
    }),
    Credentials({
      id: "authenticated",
      name: "Authenticated",
      type: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // let user = null;
        // console.log("credentials", credentials);

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash);
        const user =
          users.find(
            (user) =>
              user.email === credentials.email &&
              user.password === credentials.password
          ) ?? null;

        // console.log("user", user);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          // throw new Error("User not found.");
          console.log("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
