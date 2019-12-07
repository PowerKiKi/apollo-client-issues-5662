import gql from 'graphql-tag';
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

interface Login {
  login: { username: string; };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(apollo: Apollo) {

    const loginMutation = gql`
      mutation Login {
        login {
          username
        }
      }
    `;

    apollo.mutate<Login>({
      mutation: loginMutation,
    }).subscribe(result => {

      // Here `.login` is incorrectly treated as possibly null and
      // this will incorrectly break compilation with "strictNullChecks": true
      console.log(result.data.login.username);
    });
  }
}
