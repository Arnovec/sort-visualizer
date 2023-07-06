type props = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  max?: number;
};

function PositiveInput({ value, setValue, max }: props) {
  return (
    <input
      placeholder="count"
      type="number"
    //   max={max}
      value={value}
      onChange={(event) => {
        console.log(+event.target.value);
        const val = Math.floor(+event.target.value);
        if (val > 0) {
          if (max && val > max) {
            setValue(max);
          } else {
            setValue(val);
          }
        // setValue(val);
        }
      }}
    />
  );
}

export { PositiveInput };
