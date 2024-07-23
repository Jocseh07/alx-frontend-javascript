import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (err) {
    throw new Error(err);
  }
  return { photo: photo || null, user: user || null };
}
