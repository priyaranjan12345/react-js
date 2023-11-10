import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>No User Available! Please Login</div>;
  }

  return (
    <>
      <div>Username: {user.username}</div>
      <div>Password: {user.password}</div>
    </>
  );
}

export default Profile;
