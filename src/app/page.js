import { redirect } from "next/navigation";
import StoreProvider from "./lib/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      {redirect("/account/login")} // Redirige automáticamente a login
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
    </StoreProvider>
  );
}
