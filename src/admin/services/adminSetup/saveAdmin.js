import { ref, set } from "firebase/database";
import { db } from "../../../firebase/firebase";

export async function saveAdmin(adminData) {

  try {

    await set(ref(db, "admin"), adminData);

    return {
      success: true
    };

  } catch (error) {

    console.error("Save Admin Error :", error);

    return {
      success: false,
      message: error.message
    };

  }

}