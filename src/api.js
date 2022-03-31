const request = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();

  if (!response.ok) throw new Error(data);

  return data;
};

export const requestRegister = async (name, password, email) => {
  const response = await request("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      password,
      email,
    }),
  });

  return response;
};

export const requestSignin = async (email, password) => {
  const response = await request("http://localhost:3000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response;
};

export const requestUserInfo = async (accessToken, userId) => {
  const response = await request(`http://localhost:3000/600/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
