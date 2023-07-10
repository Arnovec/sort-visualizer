type props = {
  value: number;
  setValue: (val: number) => void;
};

function PositiveInput({ value, setValue }: props) {
  return (
    <input
      placeholder="count"
      type="number"
      value={value}
      onChange={(event) => {
        console.log(+event.target.value);
        const val = Math.floor(+event.target.value);
        if (val > 0) {
          setValue(val);
        }
      }}
    />
  );
}

export { PositiveInput };
