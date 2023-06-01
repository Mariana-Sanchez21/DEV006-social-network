import {
  collection, addDoc, getDocs, query, orderBy, onSnapshot, deleteDoc, doc, getDoc,
} from 'firebase/firestore';
import { db, auth } from './configFirebase.js';
// Funcion para guardar info de cada post
export const savePost = async (title, description) => {
  const user = auth.currentUser;
  const name = user.displayName;
  const email = user.email;
  const useruid = user.uid;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const fullDate = `${day}/${month}/${year}- ${hour}:${minutes}`;
  await addDoc(collection(db, 'postsWall'), {
    title,
    description,
    useruid,
    email,
    name,
    createdAt: currentDate, // Agrega una propiedad 'createdAt' con la fecha de creación actual
    fullDate,
  });
};
// Ordena de manera descendente los post, primero los nuevos a los más antiguos
const getPosts = () => {
  const postsQuery = query(collection(db, 'postsWall'), orderBy('createdAt', 'desc'));
  return getDocs(postsQuery);
};
getPosts();

// Funcion para eliminar los postS
export const deletePost = (id) => deleteDoc(doc(db, 'postsWall', id));
export const getPost = (id) => getDoc(doc(db, 'postsWall', id));
// Trae los posts en tiempo real
export const onGetPosts = (drawPosts) => {
  const postsQuery = query(collection(db, 'postsWall'), orderBy('createdAt', 'desc'));

  onSnapshot(postsQuery, (querySnapshot) => {
    const resultPosts = [];
    querySnapshot.forEach((document) => {
      const resultData = document.data();
      const resultId = document.id;

      resultPosts.push({ ...resultData, id: resultId });
    });
    drawPosts(resultPosts);
  });
};
