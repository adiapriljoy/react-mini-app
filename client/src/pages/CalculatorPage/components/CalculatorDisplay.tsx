type DisplayProps = {
  value: string | number;
};

export function Display({ value }: DisplayProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-4">
      <div className="text-right text-4xl font-light text-white min-h-[3rem] break-all">
        {value || "0"}
      </div>
    </div>
  );
}
