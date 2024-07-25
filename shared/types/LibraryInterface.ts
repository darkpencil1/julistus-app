type MandatoryFields = {
  name: string;
  description: string;
};

export type RowEntry = MandatoryFields & { [key: string]: string };

export type LibraryTableData = {
  title: string;
  categories: string[];
  data: RowEntry[];
};
