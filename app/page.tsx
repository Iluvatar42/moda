import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/model-a");
  return null;
}
