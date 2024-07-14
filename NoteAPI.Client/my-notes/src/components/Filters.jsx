import { Input, Select } from "@chakra-ui/react";
import React from "react";

export default function Filters() {
  return (
    <div>
      <Input placeholder="Поиск..." marginBottom={"10px"} width={"50%"} />
      <Select width={"50%"}>
        <option>Сначала новые</option>
        <option>Сначала старые</option>
      </Select>
    </div>
  );
}
