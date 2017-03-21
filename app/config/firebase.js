import * as firebase from 'firebase';

import config from '../../config';


export default class Firebase {

static initialise(){
  firebase.initializeApp({
      apiKey: config.API_KEY,
      authDomain: config.AUTH_DOMAIN,
      databaseURL: config.DATABASE_URL,
      storageBucket: config.STORAGE_BUCKET,
      messagingSenderId: config.MESSAGING_SENDER_ID
    });
  }
}
