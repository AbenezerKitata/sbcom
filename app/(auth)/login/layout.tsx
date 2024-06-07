const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Sunbuggy auth",
  description: "Sunbuggy auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foregroundmin-h-screen flex flex-col items-center w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 mt-20">
      {children}
    </div>
  );
}
