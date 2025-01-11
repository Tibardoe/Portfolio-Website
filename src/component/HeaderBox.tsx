export default function HeaderBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 bg-transparent w-1/5 flex justify-center font-bold text-4xl border-4 border-black mt-10">
      {children}
    </div>
  );
}
