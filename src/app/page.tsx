"use client";
import { Column, DataTable } from "@/components/TableData/DataTable";
import InputField from "../components/InputField/InputField";
//import { DataTable, Column } from "../components/DataTable/DataTable";
import React, { useState } from "react";

// Demo Data
const demoData = [
  { name: "Vinay", email: "sonwanevinay11@gmail.com" },
  { name: "Rohan", email: "rohansonwane11@gmail.com" },
  { name: "Shubham", email: "shubham@gmail.com" },
];

const columns: Column<(typeof demoData)[0]>[] = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [selectedRows, setSelectedRows] = useState<typeof demoData>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 text-gray-900 flex flex-col items-center py-12 px-2">
      <div className="w-full max-w-3xl space-y-8">
        {/* Demo Input Field */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Professional UI Components Demo
          </h1>
          <InputField
            label="Demo Input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            helperText="Try the input field"
            variant="outlined"
            size="md"
          />
        </div>

        {/* Data Table Card */}
        <div className="bg-white/90 p-6 rounded-xl shadow-xl transition hover:shadow-2xl">
          <DataTable
            data={demoData}
            columns={columns}
            selectable
            onRowSelect={setSelectedRows}
          />
        </div>

        {/* Selection Output */}
        <div className="text-lg font-medium text-gray-700 pt-4">
          <span className="text-blue-700">Selected:</span>{" "}
          {selectedRows.map((row) => row.name).join(", ")}
        </div>
      </div>
    </div>
  );
}
