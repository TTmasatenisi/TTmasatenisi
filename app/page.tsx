import { redirect } from "next/navigation";

export default function Page() {
  redirect("/public");
  return null;
}
