import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  Link,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import {
  Select,
  CreatableSelect,
  AsyncSelect,
  OptionBase,
  GroupBase,
} from "chakra-react-select";

const statusOptions = [
  { value: "ativa", label: "Ativa" },
  { value: "pendente", label: "Pendente" },
  { value: "bloqueada", label: "Bloquada" },
];

const mappedstatusOptions = statusOptions.map((option) => ({
  ...option,
  statusScheme: option.value,
}));

const groupedOptions = [
  {
    label: "Status",
    options: statusOptions,
  },
];



const AccountsFilter = () => {
  return (
    <FormControl>
      <Select
        isMulti
        name="status"
        options={groupedOptions}
        placeholder=""
        closeMenuOnSelect={false}
        size="sm"
      />
    </FormControl>
  );
};

export default AccountsFilter;
