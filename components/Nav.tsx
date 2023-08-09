import { currentUser } from "@clerk/nextjs";
import NavBar from "./Navbar";

export default async function Nav() {
  const user = await currentUser();
  return <NavBar user={user} />;
}
