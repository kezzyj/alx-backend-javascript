import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])

    .then(([photoRes, userRes]) => {
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })

    .catch(() => {
      console.log('Signup system offline');
    });
}
