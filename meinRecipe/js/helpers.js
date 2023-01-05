export const AJAX = async function (url, uploadRecipe = undefined) {
  try {
    const fetchPro = uploadRecipe
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadRecipe),
        })
      : fetch(url);

    const res = await fetchPro;
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status} ${data.message}`);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
