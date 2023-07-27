import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MainLayout } from "@/common/layouts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-950 text-white">
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
