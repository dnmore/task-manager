export function PriorityFilter() {
  return (
    <div className="mt-6 grid px-6">
      <label
        htmlFor="priority-select"
        className="text-lg mb-2 uppercase font-sans_grotesque"
      >
        Filter Tasks by Priority
      </label>

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
  );
}
