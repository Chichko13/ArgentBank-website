async function userProfile(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.status === 200) {
      return { success: true, data: data.body };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

async function editUserProfile(token, newUserName) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newUserName),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, data: data.body };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

export { userProfile, editUserProfile };
