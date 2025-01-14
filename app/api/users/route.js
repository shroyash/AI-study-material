import { db } from "@/Config/db";
import { usersTable } from "@/Config/Schema"; 
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {user} = await req.json();
    // Check if the user exists
    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    if (userResult.length === 0) {
      // Insert the user if not found
      const result = await db.insert(usersTable).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      }).returning(usersTable);
      return NextResponse.json(result)
    } 
    return NextResponse.json(userResult)

}

