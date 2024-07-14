import { Input, Select } from "@chakra-ui/react";
import React from "react";

export default function Filters({ filter, setFilter }) {
  return (
    <div>
      <Input
        placeholder="Поиск..."
        marginBottom={"10px"}
        width={"50%"}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <Select
        onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
        width={"50%"}
      >
        <option value={"desc"}>Сначала новые</option>
        <option value={"asc"}>Сначала старые</option>
      </Select>
    </div>
  );
}
