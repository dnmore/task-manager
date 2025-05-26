

type PriorityFilterProps = {
  value: string,
  onSelect: (e:React.ChangeEvent<HTMLSelectElement>) => void
}


export function PriorityFilter({value, onSelect} : PriorityFilterProps) {
  return (
    <div className="mt-6 grid px-6">
      <label
        htmlFor="priority-filter"
        className="text-lg mb-2 uppercase font-sans_grotesque"
      >
        Filter Tasks by Priority
      </label>

      <select
        id="priority-filter"
        value={value}
        onChange={onSelect}
        className="w-full max-w-80 border border-slate-800  shadow-primary py-1.5 pl-1 pr-20 mb-2 uppercase cursor-pointer  placeholder:text-gray-400  focus-within:outline-2 focus-within:outline-indigo-600"
      >
        <option value="all">All</option>
        <option value="🌿 low"> 🌿 Low Priority</option>
        <option value="🕒 medium">🕒 Medium Priority</option>
        <option value="🔥 high">🔥 High Priority</option>
      </select>
    </div>
  );
}
