import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/lib/dbConnect";
import User, { IUser } from "@/app/models/user";

export async function POST(request: Request) {
  const data = await request.json();

  // Validate the data against the schema
  try {
    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnect();

    const user: IUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    
  } catch (error: any) {
    if (error.code === 11000) {
      // Handle duplicate key error (email already registered)
      return NextResponse.json(
        { message: "Email already registered." },
        { status: 400 }
      );
    }
    // Return the error message with a status code of 400
    return NextResponse.json({ message: error }, { status: 400 });
  }

  return NextResponse.json({ message: data }, { status: 200 });
}
