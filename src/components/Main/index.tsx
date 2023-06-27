export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col flex-grow justify-center items-center">
      {children}
    </main>
  );
}