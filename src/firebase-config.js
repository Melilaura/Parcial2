const firebaseConfig = {
    apiKey: "AIzaSyAV85iKVhNmiM9KFnXbDVH3-a0Do5fbdtI",
    authDomain: "parcial-2-0.firebaseapp.com",
    databaseURL: "https://parcial-2-0-default-rtdb.firebaseio.com",
    projectId: "parcial-2-0",
    storageBucket: "parcial-2-0.appspot.com",
    messagingSenderId: "663481580168",
    appId: "1:663481580168:web:a011fd3cdaebe3fcb5fd3d"
  };

  export function getFirebaseConfig()
  {
      if(!firebaseConfig || !firebaseConfig.apiKey)
      {
          throw new Error("Firebase config error");
      }
      else
      {
          return firebaseConfig;
      }
  }