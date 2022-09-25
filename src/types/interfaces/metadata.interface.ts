import { MetadataField, Sorting } from "../enums";

export interface Metadata {
  filters: { field: MetadataField; value: string }[];
  sorting: { field: MetadataField; value: Sorting };
}
