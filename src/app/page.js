import { redirect } from "next/navigation";
import Login from "./account/login/page";
import StoreProvider from "./lib/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      {redirect("/account/login")} // Redirige automáticamente
    </StoreProvider>
  );
}
