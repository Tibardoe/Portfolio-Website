export default function HeaderBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 bg-transparent justify-center font-bold text-2xl border-4 border-black mt-10 hidden md:flex">
        {children}
      </div>

      {/* on smaller screens */}

      <div className="p-3 bg-transparent justify-center font-bold text-xl border-4 border-black mt-10 flex md:hidden">
        {children}
      </div>
    </>
  );
}
