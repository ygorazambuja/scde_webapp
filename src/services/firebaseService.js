import { firebaseDatabase } from '../utils/firebaseUtils';

export default class FirebaseService {
  static pushData = (node, objSubmit) => {
    const ref = firebaseDatabase.ref(node).push();
    const id = firebaseDatabase.ref(node).push().key;
    ref.set(objSubmit);
    return id;
  };

  static getData = (nodePath, callback, size = 8354) => {
    const query = firebaseDatabase.ref(nodePath).limitToLast(size);
    query.on('value', dataSnapshot => {
      const items = [];
      dataSnapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });
    return query;
  };
  static updateData = (id, node, obj) => {
    return firebaseDatabase.ref(node + '/' + id).set({ ...obj });
  };
}
