import { FormattedMessage } from "react-intl";
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
         <FormattedMessage id="app.priority-filter" />
      </label>

      <select
        id="priority-filter"
        value={value}
        onChange={onSelect}
        className="w-full max-w-80 rounded-sm border-2 border-slate-800  py-1.5 pl-1 pr-20 mb-2 uppercase cursor-pointer  placeholder:text-gray-400  focus-within:outline-2 focus-within:outline-customPurple"
      >
        <option value="all"><FormattedMessage id="app.optionAll" /></option>
        <option value="low"><FormattedMessage id="app.optionLow" /></option>
        <option value="medium"><FormattedMessage id="app.optionMedium"/></option>
        <option value="high"><FormattedMessage id="app.optionHigh"/></option>
      </select>
    </div>
  );
}
