import { db } from "./Config/db";
import { userName } from "./Config/schema"; // Import the table schema
import { eq } from "drizzle-orm";

export default async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.json();
    const { user } = body;

    // Check if the user exists
    const result = await db
      .select()
      .from(userName)
      .where(eq(userName.email, user?.primaryEmailAddress?.emailAddress));

    console.log("User Query Result:", result);

    if (result.length === 0) {
      // Insert the user if not found
      await db.insert(userName).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      });

      console.log("User inserted successfully.");
      return new Response(
        JSON.stringify({ message: "User created successfully." }),
        { status: 201 }
      );
    } else {
      console.log("User already exists.");
      return new Response(
        JSON.stringify({ message: "User already exists." }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error in POST API:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500 }
    );
  }
}

