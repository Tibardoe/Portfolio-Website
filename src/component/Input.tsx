type inputProp = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function Input({
  placeholder,
  name,
  value,
  onChange,
}: inputProp) {
  return (
    <div className="w-full">
      <input
        className="w-full border-l-4 border-b-4 bg-transparent outline-none p-3 text-lg border-black placeholder:font-bold"
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
