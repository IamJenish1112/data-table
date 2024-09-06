# DataTable Component

A reusable, customizable data table component built using Material-UI, designed to support sorting, pagination, and search functionality.

## Installation

To install the component, run:

```bash
npm i jenish-data-table
```

# usage

```javascript
import React, { useState } from "react";
import DataTable from "your-package-name";

const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  const headCols = [
    {
      id: "name",
      name: "Name",
      sorting: true,
      sortingName: "name",
      order: "asc",
      width: "25%",
    },
    {
      id: "age",
      name: "Age",
      sorting: true,
      sortingName: "age",
      order: "desc",
      width: "25%",
    },
    { id: "address", name: "Address", width: "50%" },
  ];

  const rows = [
    ["John Doe", "30", "1234 Elm Street"],
    ["Jane Doe", "25", "5678 Oak Street"],
  ];

  const totalRecords = 100;

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    // Add search functionality here
  };

  const handleSortBy = (colName) => {
    // Handle sort logic here
  };

  const handleOrder = (order) => {
    // Handle order change here
  };

  return (
    <DataTable
      headCols={headCols}
      rows={rows}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRecords={totalRecords}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      searchRecord={handleSearch}
      searchValue={searchValue}
      changeSortBy={handleSortBy}
      changeOrder={handleOrder}
      isLoading={false}
      searchPlaceholder="Search records..."
    />
  );
};

export default App;
```

### Props

| Prop Name                 | Type       | Default Value | Description                                                                            |
| ------------------------- | ---------- | ------------- | -------------------------------------------------------------------------------------- |
| `headCols`                | `array`    | `[]`          | Array of column headers. Each column should have `id`, `name`, `sorting`, and `width`. |
| `rows`                    | `array`    | `[]`          | Array of rows. Each row is an array of column values.                                  |
| `page`                    | `number`   | `0`           | Current page number.                                                                   |
| `rowsPerPage`             | `number`   | `5`           | Number of rows displayed per page.                                                     |
| `totalRecords`            | `number`   | `0`           | Total number of records in the dataset.                                                |
| `handleChangePage`        | `function` | `() => {}`    | Callback to handle page change.                                                        |
| `handleChangeRowsPerPage` | `function` | `() => {}`    | Callback to handle rows per page change.                                               |
| `searchBarPosition`       | `string`   | `"center"`    | Position of the search bar (e.g., `"center"`, `"left"`, `"right"`).                    |
| `searchRecord`            | `function` | `() => {}`    | Callback function for handling search.                                                 |
| `rowsPerPageOptions`      | `array`    | `[5, 10, 25]` | Array of rows per page options.                                                        |
| `datatable`               | `boolean`  | `true`        | If `true`, renders the table with search, pagination, and sorting functionality.       |
| `searchValue`             | `string`   | `""`          | Value of the search input.                                                             |
| `changeSortBy`            | `function` | `() => {}`    | Callback for handling sorting by column.                                               |
| `changeOrder`             | `function` | `() => {}`    | Callback for changing the sorting order (`asc` or `desc`).                             |
| `isLoading`               | `boolean`  | `false`       | If `true`, displays a loading spinner.                                                 |
| `searchPlaceholder`       | `string`   | `""`          | Placeholder text for the search input.                                                 |

## Features

- Sorting: Allows sorting of columns by ascending or descending order.
- Pagination: Supports pagination with customizable rows per page.
- Search: Includes a search bar to filter rows.
- Loading State: Displays a loading spinner when data is being fetched.
