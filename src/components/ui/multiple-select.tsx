import { cn } from '../../utils';
import React from 'react'
import Select from "react-select"

interface OptionProps {
    label: string;
    value: number;
}



export const MultipleSelect = ({options, setState, selectedOptions}:{options: OptionProps[] | [], setState: Function, selectedOptions: [] | OptionProps[]}) => {
 

    const handleChange = (selectedOption: any) => {
        setState(selectedOption);
      };
    return (
    <Select
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      options={options}
    />
  )
}