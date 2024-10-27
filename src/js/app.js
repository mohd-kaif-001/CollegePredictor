import { db } from './firebaseConfig.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

async function fetchColleges() {
    const collegeList = document.getElementById("collegeList");
    const querySnapshot = await getDocs(collection(db, "colleges"));
    querySnapshot.forEach((doc) => {
        const college = doc.data();
        const li = document.createElement("li");
        li.innerText = `${college.name} - ${college.location}`;
        collegeList.appendChild(li);
    });
}

fetchColleges();
