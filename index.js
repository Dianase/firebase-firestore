const admin = require('firebase-admin') //imports firebase-admin(backend) as ADMIN
const creds = require('./credentials.json') //these credentials are our key and are imported as CREDS

admin.initializeApp({   ///this line authenticates our credentials, connects to firebase
  credential: admin.credential.cert(creds)
})

const db = admin.firestore() //this line says we are using the firestore service and storing it as DB
const clothesRef = db.collection('clothes')


const createClothes =()=>{
const newClothes = {
  sku: 'STRM04'
  type: 'shirt',
  style: 't-shirt',
  brand: 'rick n morty',
  color: 'tie-dye',
  graphic: true,
  price: 19.99
  sizes: ['xs', 's', 'm', 'l', 'xl']
}

clothesRef.add(newClothes)
.then(docRef => {
  console.log(docRef.id)
})
.catch(err => console.error(err))
}





//The line below accesses the collection in our db 'nameOfCollection' and find the 'AdminUser' document
// db.collection('nameOfCollection').doc('AdminUser').get()
// .then(doc => {
//   console.log(doc.data())
// })
// .catch(err => console.error(err))