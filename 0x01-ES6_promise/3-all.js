import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);
  allPromises
    .then(([Photo, User]) => {
      console.log(Photo.body, User.firstName, User.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
