export default function Home() {
  console.log(process.env.NEXTAUTH_URL);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {process.env.NEXTAUTH_URL} &nbsp; Testing my env works...
    </main>
  );
}
