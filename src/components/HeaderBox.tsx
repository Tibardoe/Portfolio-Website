export default function HeaderBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 bg-transparent flex justify-center font-bold text-2xl border-4 border-black mt-10">
      {children}
    </div>
  );
}
