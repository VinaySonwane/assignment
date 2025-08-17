"use client";
import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelect = (idx: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(idx)) newSelected.delete(idx);
    else newSelected.add(idx);
    setSelectedRows(newSelected);
    if (onRowSelect) onRowSelect(Array.from(newSelected).map((i) => data[i]));
  };

  if (loading)
    return (
      <div className="p-8 text-center text-blue-700 font-semibold text-lg">
        Loading...
      </div>
    );
  if (!data.length)
    return (
      <div className="p-8 text-center text-gray-500 font-medium text-lg">
        No data available
      </div>
    );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
          <tr>
            {selectable && <th className="w-12 p-4"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3 px-6 text-left text-gray-700 font-semibold uppercase tracking-wide select-none"
                scope="col"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const isSelected = selectedRows.has(idx);
            return (
              <tr
                key={idx}
                className={`transition-colors ${
                  isSelected
                    ? "bg-blue-100"
                    : "hover:bg-blue-50 focus-within:bg-blue-50"
                } border-b last:border-b-0`}
              >
                {selectable && (
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelect(idx)}
                      aria-label={`Select row ${idx + 1}`}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={`${col.key}-${idx}`} // unique key using col.key + row index
                    className="px-6 py-4 text-gray-800 font-medium whitespace-nowrap"
                  >
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
