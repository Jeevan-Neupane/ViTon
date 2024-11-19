import React from "react";
import { FormButton, FormDiv, SearchField } from "./style";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchItem: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/search/${data.searchItem}`);
  };

  return (
    <FormDiv onSubmit={handleSubmit(onSubmit)}>
      <SearchField
        type='text'
        placeholder='search items in store...'
        {...register("searchItem", {
          required: true,
        })}
      />
      <FormButton>
        <BiSearch />
      </FormButton>
    </FormDiv>
  );
}

export default SearchBar;
