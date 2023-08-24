const requestData = async (url) => {
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    console.log("При запросе произошла ошибка: " + response.status);
  }
};

export default requestData;
