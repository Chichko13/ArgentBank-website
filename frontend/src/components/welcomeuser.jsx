import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../store/userSliceDeux";
import { useState } from "react";
import { editUserProfile } from "../api/userApi";
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

  const FormSubmit = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("userToken");
    const newUser = {
      userName: newUserName,
    };
    if (token) {
      const result = await editUserProfile(token, newUser);
      if (result.success) {
        console.log("Success", result.data);
        dispatch(editUserName(newUserName));
        setIsEditing(false); // ferme le formulaire
      } else {
        console.error(result.message);
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
