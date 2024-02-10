function WelcomeUser({ FirstName, LastName }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {FirstName} {LastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default WelcomeUser;
