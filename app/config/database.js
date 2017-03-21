// /**
//  * @class Database
//  */
//
// import * as firebase from "firebase"
//
// export default class Database  {
//
//   /**
//   *
//   * @param picturesUploaded
//   * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
//   */
//   static  markersOnMap(picturesUploaded, markersPinned) {
//     let userUploadedPicture = "/issue" + picturesUploaded  + "/picture";
//
//     return firebase.database().ref(userUploadedPicture).set ({
//       picturesUploaded: picturesUploaded
//     })
//   }
//
//   /**
//     *
//     * @param picturesUploaded
//     * @param callback Uploaded Pictures
//     */
//
//     static listenPicturesUploaded(picturesUploaded, callback) {
//       let userUploadedPicture  =  "/issue" + picturesUploaded  + "/picture";
//
//       firebase.database().ref(userUploadedPicture).on('value', (snapshot) => {
//         const pictures = [];
//         if (snapshot.val()) {
//           pictures = snapshot.val().pictures
//         };
//         callback pictures;
//       });
//     }
// }
