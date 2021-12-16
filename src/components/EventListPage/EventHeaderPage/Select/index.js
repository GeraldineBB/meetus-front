import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  CURRENT_SELECT_CATEGORIES_EVENT_LIST,
  SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE,
  SELECT_CATEGORIES_EVENT_LIST_IS_OPEN,
} from "../../../../actions/events";

export default function SelectCategories() {
  const categoriesList = useSelector(
    (state) => state.events.selectCategoriesEventList
  );
  const dispatch = useDispatch();
  const { selectCategoriesEventListIsOpen, currentSelectCategoriesEventList } =
    useSelector((state) => state.events);

  console.log(categoriesList);

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch({ type: CURRENT_SELECT_CATEGORIES_EVENT_LIST, value });
  };

  const handleClose = () => {
    dispatch({ type: SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE });
  };

  const handleOpen = () => {
    dispatch({ type: SELECT_CATEGORIES_EVENT_LIST_IS_OPEN });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={selectCategoriesEventListIsOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          value={currentSelectCategoriesEventList}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value="">Pas de filtre</MenuItem>
          {categoriesList.map((event) => (
            <MenuItem value={event.name} key={event.id}>
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
