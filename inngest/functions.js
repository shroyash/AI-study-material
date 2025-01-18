// import { inngest } from "./client";
// import { eq } from "drizzle-orm";
// import { db } from "@/Config/db";
// import { usersTable } from "@/Config/Schema"; 



// export const createUser = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event, step }) => {
//     await step.sleep("wait-a-moment", "1s");
//     return { message: `Hello ${event.data.email}!` };
//   },
//   { id: "createUser" },
//   { event: "create.user" },


//   async ({ event, step }) => {
//     const {user} = event.data;
//     const result = await step.run(
//       "Check user and create new user if not in db",
//       async () => {
//         const userResult = await db
//           .select()
//           .from(usersTable)
//           .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

//         if (userResult.length === 0) {
//           // Insert the user if not found
//           const result = await db
//             .insert(usersTable)
//             .values({
//               name: user?.fullName,
//               email: user?.primaryEmailAddress?.emailAddress,
//             })
//             .returning(usersTable);
//           return result;
//         }
//         return userResult;
//       }
//     );
//     return 'Sucess';
//   }
// );
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);