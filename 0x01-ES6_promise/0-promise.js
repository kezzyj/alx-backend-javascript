/* eslint-disable no-unused-vars */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
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
}
