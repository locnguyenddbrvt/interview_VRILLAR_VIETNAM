import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Footer from "./components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Container maxWidth="xl" sx={{ py: 5 }}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
