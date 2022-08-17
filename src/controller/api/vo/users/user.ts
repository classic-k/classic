import User from "./models/Users";
import { chkRequired } from "../utils/helpers";
export const Register = async (data: object) => {
  const req = ["firstname", "lastname", "email", "phone", "address"];
  if (chkRequired(data, req)) {
    const user = new User(data);
    const res = await user.save();
    if (res) return true;
  }

  return false;
};

export const verifyUser = () => {
  console.log("Verification");
};
