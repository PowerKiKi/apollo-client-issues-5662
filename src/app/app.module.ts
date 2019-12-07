import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';

import { AppComponent } from './app.component';
import { buildSchema } from 'graphql';
import { addMockFunctionsToSchema } from 'graphql-tools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(apollo: Apollo) {

    const typeDefs = `
    type Query {
        hello: String!
    }

    type Login {
        username: String!
    }

    type Mutation {
        login: Login!
    }
`;

    const mocks = {
      String: () => 'test string',
    };
    const schema = buildSchema(typeDefs);

    addMockFunctionsToSchema({schema, mocks});
    apollo.create({
      link: new SchemaLink({schema}),
      cache: new InMemoryCache(),
    });
  }
}
