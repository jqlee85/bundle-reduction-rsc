export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="lg:flex-grow flex flex-col justify-center items-center p-4 overflow-y-auto">
      {children}
    </main>
  );
}