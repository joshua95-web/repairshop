import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-[url(/therepairshop.png)] bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            The Computer
            <br />
            Repair Shop
          </h1>
          <address>
            12345 Address
            <br />
            Bristol
          </address>
          <p>Open Monday-Friday 9-5</p>
          <Link href="tel:12345678912" className="hover:underline">
            12345678912
          </Link>
        </div>
      </main>
    </div>
  );
}
