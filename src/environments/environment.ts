// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyASeQShE-U0JNm3dIBmfcke1YQwCicAdE4',
    authDomain: 'tag-manager-angular4.firebaseapp.com',
    databaseURL: 'https://tag-manager-angular4.firebaseio.com',
    projectId: 'tag-manager-angular4',
    storageBucket: '',
    messagingSenderId: '302302679911'
  }
};
