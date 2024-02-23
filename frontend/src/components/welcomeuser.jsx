import { useDispatch, useSelector } from "react-redux";
import { editFirstName } from "../store/userSliceDeux";
import { useState } from "react";
function WelcomeUser({ FirstName, LastName }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewuserName] = useState(user.userName);

  const editClick = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const FormSubmit = async () => {
    event.preventDefault();
    const token = sessionStorage.getItem("userToken");
    if (token) {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUserName }),
          }
        );
        const data = await response.json();
        if (response.status === 200) {
          console.log("Success", data);
          dispatch(editFirstName(newUserName));
          setIsEditing(false); // ferme le formulaire
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="header">
      {isEditing ? (
        <form onSubmit={FormSubmit} className="edit">
          <h1>Edit user info</h1>
          <div>
            <label htmlFor="username">User name :</label>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={user.user.userName}
              onChange={(e) => setNewuserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstname">First name :</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={user.user.firstName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name :</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={user.user.lastName}
              disabled
            />
          </div>
          <div className="edit__Btn__container">
            <button type="submit" className="edit__Btn">
              Save
            </button>
            <button type="button" className="edit__Btn" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {FirstName} {LastName}
          </h1>
          <button className="edit-button" onClick={editClick}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}
export default WelcomeUser;
