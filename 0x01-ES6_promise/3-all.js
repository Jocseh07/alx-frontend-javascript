import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo = null;
  let user = null;
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      [photo, user] = values;
      console.log(photo.body, user.firstName, user.lastName);
      return {
        body: photo.body,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    })
    .catch(() => console.log('Signup system offline'));
}
