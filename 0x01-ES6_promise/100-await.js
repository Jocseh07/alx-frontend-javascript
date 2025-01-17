import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result = { photo, user };
  } catch (err) {
    result = { photo: null, user: null };
  }
  return result;
}
