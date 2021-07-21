import React, { useContext } from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FetchContext from '../context/FetchContext';
import { fetchArea } from '../services/Api';

function DropDownArea() {
  const { areasFood, setData } = useContext(FetchContext);

  async function rendercards({ target: { value } }) {
    const filterArea = await fetchArea(value);
    setData(filterArea);
  }

  return (
    <div>
      <Dropdown
        name="area"
        id="area"
        data-testid="explore-by-area-dropdown"
        onChange={ rendercards }
      >
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
        >
          Origem Foods
        </Dropdown.Toggle>

        <Dropdown.Menu
          data-testid="All-option"
          value="All"
        >
          <Dropdown.Item
            data-testid="All-option"
            value="All"
          >
            All
          </Dropdown.Item>
          {areasFood.map(({ strArea }, index) => (
            <Dropdown.Item
              key={ index }
              value={ `${strArea}` }
              data-testid={ `${strArea}-option` }
            >
              {strArea}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* <select
        name="area"
        id="area"
        data-testid="explore-by-area-dropdown"
        onChange={ rendercards }
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {areasFood.map(({ strArea }, index) => (
          <option
            key={ index }
            value={ `${strArea}` }
            data-testid={ `${strArea}-option` }
          >
            {strArea}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default DropDownArea;
