export function Navbar() {
  return (
    <header
      role="banner"
      className="w-full max-w-xs pt-4 pb-2 px-4 my-10 mx-auto flex flex-col justify-center items-center  mb-4 text-base font-bold font-sans_grotesque border-2  border-black shadow-primary"
    >
      <h1 className="text-4xl font-extrabold tracking-wider">Taskie</h1>
      <div className="flex items-center gap-8 py-2">
        <button className="border-b-4 border-b-transparent hover:border-b-purple-700 hover:text-purple-700 transition-all ease-in-out">Rules</button>
        <p className="border-b-4 border-b-transparent uppercase">Points: 50</p>
      </div>
    </header>
  );
}
