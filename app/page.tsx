import CardElement from "./card";
import LazyYoutube from "./lazy-youtube";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-24">
      <CardElement cardContent={<TempCardContent />} cardTitle="Temp Title" />
    </main>
  );
}

function TempCardContent() {
  return (
    <LazyYoutube
      videoId="0FfWkSqIXFU"
      playlistId="PLrCmFi7dP5HyWcWD4dx9L7x85_Z5RE1Q2"
    />
  );
}
