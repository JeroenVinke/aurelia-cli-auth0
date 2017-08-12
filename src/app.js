import {WebAuth} from 'auth0-js';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    var auth0 = new WebAuth({
      domain: "{YOUR_AUTH0_DOMAIN}",
      clientID: "{YOUR_AUTH0_CLIENT_ID}"
    });
    console.log(auth0);
  }
}
