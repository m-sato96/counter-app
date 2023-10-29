export const useCounter = () => {
  const counter: Ref<number> = useState<number>("counter", () => 0);

  const updateCounter = (counter: Ref<number>) => (calculation: string) => {
    if (calculation === "+") {
      counter.value++;
    } else if (calculation === "-") {
      if (counter.value > 0) {
        counter.value--;
      }
    } else {
      counter.value = 0;
    }
  };

  return {
    counter: readonly(counter),
    updateCounter: updateCounter(counter),
  };
};
