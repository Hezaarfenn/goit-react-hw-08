import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filterSlice";
import { selectFilter } from "../../redux/filters/filtersSelectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Kişilerde Ara"
      value={filter}
      className={styles.searchInput}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
