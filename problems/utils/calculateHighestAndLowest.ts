function calculateHigestAndLowest(type: string, claculateItems: Array<number>):number {
  let maxValue = 250;
  let minValue = 0;
  let value: number;
  switch (type) {
    case "highest":
      value = minValue;
      claculateItems.forEach((item) => {
        if (item > value) {
          value = item;
        }
      });
      return value;
    case "lowest":
      value = maxValue;
      claculateItems.forEach((item) => {
        if (item < value) {
          value = item;
        }
      });
      return value;

    default:
      console.log("inputError");
      return -1
  }
}
export { calculateHigestAndLowest };
