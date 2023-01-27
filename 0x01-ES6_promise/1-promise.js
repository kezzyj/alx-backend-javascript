export default getFullResponseFromAPI(success){
   return new Promise((resolve, reject) => {
   setTimeout(() => {  
   if (success) {
    resolve({status: 200,body: 'Success'});
   } else { 
    reject("The fake API is not working currently");
  }
 }, 0);
 });
}
