export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="font-bold font-mono text-xl">Caleidoscopio de Mundos</h1>
        <p className="font-mono">Em Construção</p>
      </main>
      <div className="p-5">
        <p className="text-xs flex gap-1 items-center justify-center">🖤 Powered by <span className="font-bold">CosmuxLabs</span></p>
      </div>
    </div>
  )
}