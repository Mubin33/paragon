"use client";
 
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex flex-col items-center text-center space-y-6 p-6">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>

        <p className="text-lg text-gray-300 max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => router.push("/")}
          className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-5 md:py-3 text-sm sm:text-base bg-gray-500 rounded-2xl" 
        >
          Go Home
        </button>
      </div>

      <div className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Paragon — All Rights Reserved
      </div>
    </div>
  );
}
