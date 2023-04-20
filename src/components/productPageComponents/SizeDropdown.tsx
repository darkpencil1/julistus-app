import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./SizeDropdown.scss"

type SizeOption = {
  id: Number,
  name: String,
  dimensions: String
}
const sizeOptions:Array<SizeOption> = [
  {
    id: 0,
    name: "A4",
    dimensions: "30 X 21",
  },  
  {
    id: 1,
    name: "A3",
    dimensions: "42 X 30",
  },  
  {
    id: 2,
    name: "A2",
    dimensions: "59 X 42",
  }  

]

export const SizeDropdown = (props : {}) => {
  const [selected, setSelected] = React.useState<SizeOption>(sizeOptions[0])

  return (
    <Dropdown>
      <Dropdown.Toggle className='sizeDropdown__toggle'>
        <span className='fw-bold fs-4'>{selected.name}</span> 
        &nbsp; &nbsp; ({selected.dimensions}&nbsp;cm)
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { sizeOptions.map((option:SizeOption, i:number) => {
            return(
              <Dropdown.Item as="button" onClick={()=>setSelected(sizeOptions[i])} key={i}>
                <span className='fw-bold fs-4'>{option.name}</span>
                <span className=''>&nbsp;({option.dimensions} cm)</span>
              </Dropdown.Item>
            )
          }) 
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

