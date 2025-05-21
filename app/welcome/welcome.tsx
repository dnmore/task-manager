export function Welcome() {
  return (
    <main className="flex flex-col py-7 px-6 mb-10">
      <div className="flex items-center justify-center gap-6 py-8 px-6 border-b-2 border-dashed">
        <div className="max-w-sm flex-1 bg-gray-400 rounded-full h-6 shadow-primary">
          <div
            className="bg-green-700 h-6 rounded-full shadow-primary"
            style={{
              width: `${Math.min(((50 % 100) / 100) * 100, 100)}%`,
            }}
          ></div>
        </div>
        <p className="text-sm md:text-lg uppercase">
          {50 < 100
            ? "🐴 Taskie Novice"
            : 50 < 300
            ? "🦓 Taskie Pro"
            : "🦄 Taskie Guru"}
        </p>
      </div>

      <div className="my-6 px-6 flex flex-col items-center">
        <button className="w-full font-sans_grotesque max-w-80 py-4 px-8  uppercase tracking-wider bg-yellow-400 hover:bg-yellow-500 border-2 border-black text-black text-3xl font-extrabold shadow-primary">
          Create Task
        </button>
      </div>

      <div className="mt-12 grid px-6">
        <label htmlFor="priority-select" className="text-lg mb-2 uppercase font-sans_grotesque">Filter Tasks by Priority</label>

        <select
          id="priority-select"
          defaultValue="all"
          className="w-full max-w-80 border border-black  shadow-primary py-1.5 pl-1 pr-20 mb-2 uppercase outline-none cursor-pointer  placeholder:text-gray-400  sm:text-sm sm:leading-6"
        >
          <option value="all">All</option>
          <option value="🌿 low"> 🌿 Low Priority</option>
          <option value="🕒 medium">🕒 Medium Priority</option>
          <option value="🔥 high">🔥 High Priority</option>
        </select>
      </div>
    </main>
  );
}
