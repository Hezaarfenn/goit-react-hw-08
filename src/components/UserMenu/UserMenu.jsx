import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import LogoutButton from "../LogoutButton/LogoutButton"; // LogoutButton'ı içeri aktar

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <LogoutButton />
    </div>
  );
};

export default UserMenu;
