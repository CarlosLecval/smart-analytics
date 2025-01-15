function arrayRange(
  start: number,
  stop: number,
  step: number,
  append: boolean
) {
  const arr = Array.from(
    { length: (stop - start) / step + 1 },
    (_value: unknown, index: number) => (start + index * step).toString()
  );
  if (append) arr.push("Otro");
  return arr;
};

export function ScaleQuestion({ optionsLength, option }: { optionsLength: number, option: string }) {
  return (
    <label className="flex items-center pb-1">
      <select name="scale" className="py-1 rounded border-gray-300 border-2 focus:ring-0 focus:border-gray-400">
        {arrayRange(1, optionsLength, 1, false).map(value => (
          <option key={`${option}-${value}`} value={Number(value)}>
            {value}
          </option>
        ))}
      </select>
      <span className="pl-1">{option}</span>
    </label>
  )
}
