// src/components/SearchBox.jsx
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filterSlice";
import { selectFilter } from "../../redux/filters/filtersSelectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Kişi Ara..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
