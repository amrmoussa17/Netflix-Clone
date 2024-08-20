interface InputProps {
  id: string
  label: string
  value: string
  type: string
  onChange: any
}

const Input = ({ id, label, value, type, onChange }: InputProps) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=""
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor="email"
        className="absolute top-4 left-6 text-zinc-400 -translate-y-3 scale-75 transition-transform origin-bottom-left  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
