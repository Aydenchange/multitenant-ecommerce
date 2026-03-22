import Categroies from "./Categroies";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SearchFilter from "./SearchFilter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <SearchFilter />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
}
