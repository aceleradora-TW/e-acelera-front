type SupportedFilterNames = "toContains" | "isExactly" | "equal";

type StackbyFilterBuilderParams = {
  filterName: SupportedFilterNames;
  field: string;
  filterValue: string;
};

export const stackbyFilterBuilder = ({filterName, field, filterValue}: StackbyFilterBuilderParams) => `${filterName}({${field}},${filterValue})`