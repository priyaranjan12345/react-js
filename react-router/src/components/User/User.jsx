import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white text-lg p-4">User ID: {userId}</div>
    </>
  );
}

export default User;
