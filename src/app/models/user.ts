import mongoose, { Document, Model } from "mongoose";

interface ITimestamp {
  createdAt: Date;
  updatedAt: Date;
}


export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  timestamps: ITimestamp;
  // Add more fields as needed
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    // Add more fields as needed
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
