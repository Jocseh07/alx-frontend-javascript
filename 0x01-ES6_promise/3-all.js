import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo = null;
  let user = null;
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      [photo, user] = values;
      console.log(photo.body, user.firstName, user.lastName);
      return { photo, user };
    })
    .catch(() => console.log('Signup system offline'));
}
