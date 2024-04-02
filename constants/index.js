export const BASE_URL = process.env.BASE_URL;
export const SORTING_OPTIONS = [
    { label: "Oldest First", value: "createdAt-asc" },
    { label: "Newest First", value: "createdAt-dsc" },
    { label: "A-Z (Filename)", value: "fileName-asc" },
    { label: "Z-A (Filename)", value: "fileName-dsc" }];
