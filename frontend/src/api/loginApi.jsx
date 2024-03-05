export async function login(formData) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      sessionStorage.setItem("userToken", data.body.token);
      return { success: true };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
}
