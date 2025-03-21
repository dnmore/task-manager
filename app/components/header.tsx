export function Header() {
  return (
    <main>
      <nav className="max-h-32 py-4 px-6 flex flex-wrap justify-between items-center  mb-4 text-base font-bold border border-black shadow-primary">
        <h1 className="text-4xl font-extrabold tracking-wider uppercase">
          Task<span className="text-violet-500">i</span>e
          <span className="text-violet-500">.</span>
        </h1>
        <ul className="flex items-center gap-4 py-2">
          <li>
            <p className="text-lg font-semibold">🏆 Pts 0</p>
          </li>
          <li>
            <p className="text-lg font-semibold">🐴 Novice</p>
          </li>
          <li>
            <button className="text-lg font-semibold bg-transparent cursor-pointer hover:text-fuchsia-500">

            📌 Rules
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}
