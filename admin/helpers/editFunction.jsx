async function Edit(url, data) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {}
}

export default Edit;
