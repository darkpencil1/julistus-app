import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

type SizeOption = {
  id: Number,
  name: String,
  dimensions: String
}
const sizeOptions:Array<SizeOption> = [
  {
    id: 0,
    name: "A4",
    dimensions: "29.7 x 21",
  },  
  {
    id: 1,
    name: "A3",
    dimensions: "42.0 x 29.7",
  },  
  {
    id: 2,
    name: "A2",
    dimensions: "59.4 x 42.0",
  }  

]

export const SizeDropdown = (props : {}) => {
  const [selected, setSelected] = React.useState<SizeOption>(sizeOptions[0])

  const setDropdownTitle = () => {
    const title = selected.name + " " + selected.dimensions + " cm"  
    return title
  }

  return (
    <DropdownButton id="dropdown-item-button" title={setDropdownTitle()}>
      { sizeOptions.map((option:SizeOption, i:number) => {
          return(
            <Dropdown.Item as="button" onClick={()=>setSelected(sizeOptions[i])} key={i}>
              <span className='fw-bold'>{option.name}</span>
              <span className=''>({option.dimensions} cm)</span>
            </Dropdown.Item>
          )
        }) 
      }
    </DropdownButton>
  );
}

