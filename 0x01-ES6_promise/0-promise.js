/* eslint-disable no-unused-vars */
const getResponseFromAPI = new Promise((resolve, reject) => {
  let data;
  setTimeout(() => {
    data = 'Some payload';
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });
});
