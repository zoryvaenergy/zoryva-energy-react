import { db } from "../../firebase/firebase";

import {
  ref,
  update,
  runTransaction,
} from "firebase/database";

import { findMatrixParent } from "./findMatrixParent";

export async function placeMatrixUser(userId) {

  const parentData =
    await findMatrixParent();

  if (!parentData) {

    return false;

  }

  const {
    parentId,
    level,
  } = parentData;

  const parentRef = ref(
    db,
    `users/${parentId}/matrix/childrenCount`
  );

  let position = 0;

  await runTransaction(
    parentRef,
    (currentCount) => {

      const count =
        currentCount || 0;

      position = count + 1;

      return position;

    }
  );

  const updates = {};
  updates[
    `users/${parentId}/matrixChildren/${position}`
] = userId;

  updates[
    `users/${userId}/matrix/parentId`
  ] = parentId;

  updates[
    `users/${userId}/matrix/position`
  ] = position;

  updates[
    `users/${userId}/matrix/level`
  ] = level;

  await update(
    ref(db),
    updates
  );

  return true;

}