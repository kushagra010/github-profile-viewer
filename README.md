# Github Profile Viewer

![image](https://user-images.githubusercontent.com/66089785/164889855-10fa32c4-a418-49f0-91d4-c4ab9278c5f5.png)

# Login Credentials:

`Username`: Your Github username

`Token`: Personal Access Token(PAT) of Github (If you don't have PAT, then you can follow the guide below to generate it.)

# Guide to generate Personal Access Token(PAT):

1. Visit https://github.com/ , then sign in to your account.

2. Click on `settings`. 

![2022-04-23_15-37](https://user-images.githubusercontent.com/66089785/164890084-c64413a6-9465-4b92-8b31-2e3b91d5f4b0.png)

3. Navigate to `Developer Settings > Personal access Tokens` and click on `Generate new token`.

![2022-04-23_15-38](https://user-images.githubusercontent.com/66089785/164890568-f962da51-7b01-465f-922b-c024c9a492b6.png)
![2022-04-23_15-41](https://user-images.githubusercontent.com/66089785/164890567-e92e87bc-959a-4a27-ad3d-0ddc8fe044e3.png)

4. Then add a reference title to your PAT in `Note` field and select scopes according to your use case.
5. Click `Generate Token`.
6. Hurrah! PAT is now generated and don't forget to save that PAT in some secure file, as you will not be able to access that PAT afterwards.

# To run the project on Local machine:

Please install nvm on your system before running this project

Node version : `v16.8.0`

Npm version : `7.21.0`

Base setup
```
nvm use
npm i
```

For local development
```
npm start
```

For production build
```
npm run build
```
