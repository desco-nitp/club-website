import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase"; 

const fetchTeamData=async(collectionName,documentName)=>{
    const docRef = doc(firestore, collectionName, documentName);
    const docSnap = await getDoc(docRef);
    let data=null;
    if (docSnap.exists()) {
        data=docSnap.data()[2023];
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!: "+ documentName);
      }
    return data;
}
export default fetchTeamData;