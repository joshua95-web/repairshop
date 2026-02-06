import Image from "next/image";

export const metadata = {
  title: "404: Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <h2 className="font-mono font-extrabold text-blue-300 bg-red-800 px-4 py-2 rounded">
        404 Not Found
      </h2>
      <Image
        className="m-0 rounded-xl"
        src="/404.png"
        alt="404 not found"
        width={600}
        height={800}
        priority={true}
        title="Page Not Found"
      />
    </div>
  );
}
