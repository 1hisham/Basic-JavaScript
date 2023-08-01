function subjectFilter(
  Items: SubjectDetail,
  filterItem: number,
  expression: string
) {
  let filterItems: Array<string> = [];
  Object.entries(Items).forEach(([key, value]) => {
    switch (expression) {
      case "averageMark":
        if (value.averageMark === filterItem) {
          filterItems.push(key);
          break;
        }
      case "totalMark":
        if (value.totalMark === filterItem) {
          filterItems.push(key);
          break;
        }
      case "percentage":
        if (value.totalpercentage === filterItem) {
          filterItems.push(key);
          break;
        }
    }
  });
  return filterItems;
}
export { subjectFilter };
