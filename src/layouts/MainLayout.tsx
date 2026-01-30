import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian atas: Navbar */}
      <Navbar />

      {/* Bagian tengah: konten halaman */}
      <main className="flex-1 container flex flex-col items-center">
        {children}
      </main>

      {/* Bagian bawah: Footer */}
      <Footer />
    </div>
  );
}
