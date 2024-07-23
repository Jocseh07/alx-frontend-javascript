import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      if (
        photoResponse.status === 'fulfilled'
        && userResponse.status === 'fulfilled'
      ) {
        console.log(
          photoResponse.value.body,
          userResponse.value.firstName,
          userResponse.value.lastName,
        );
      } else {
        console.log('One or more promises rejected');
      }
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
