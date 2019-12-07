# apollo-client issues #5662

This is a reproduction case for https://github.com/apollographql/apollo-client/issues/5662

To reproduce:

```shell script
git clone https://github.com/PowerKiKi/apollo-client-issues-5662.git
cd apollo-client-issues-5662
yarn
yarn start
```

It will fail with the following error:

```
ERROR in src/app/app.component.ts:33:19 - error TS2533: Object is possibly 'null' or 'undefined'.

33       console.log(result.data.login.username);
                     ~~~~~~~~~~~
```
