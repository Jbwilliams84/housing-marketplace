import React, { useState, useEffect } from "react";

function Testing() {
  // Get your list of all tables in the document.
  const tables = document.querySelectorAll("tr");

  // Map list of tables to list of number of <td> elements.
  const lengths = Array.from(tables).map(
    (table) => table.querySelectorAll("td").length
  );
  console.log(lengths);
  // Get the max of the list of lengths and log to console.
  const max = Math.max(...lengths);
  console.log(max);

  return (
    <>
      <tbody>
        <tr>
          <td>First</td>
          <td>row</td>
          <td>row</td>
          <td>row</td>
        </tr>
        <tr>
          <td>and</td>
          <td>second</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>First</td>
          <td>row</td>
        </tr>
      </tbody>
    </>
  );
}

export default Testing;
