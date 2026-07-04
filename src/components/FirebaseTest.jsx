import { db } from "../firebase/firebase";

function FirebaseTest() {
  console.log("Firebase Connected:", db);

  return (
    <div>
      <h2>Firebase Connected Successfully ✅</h2>
    </div>
  );
}

export default FirebaseTest;