# Capture

An application to share pictures with other users. You can view, like and bookmark any posts shared by any users.

-> https://capturee.netlify.app/

![alt tag](/main.png)

## Technology used

### Front-end

Application was built using `react` (along with `redux`). `Material-ui` is used to design the website. Authentication was done using `Google Auth2.0`, tokens are stored as http-only cookie so a user can stay logged in for a period of time. To log out, the cookie is simply removed by the server on request.

Reducers and actions are used to fetch data from the api (REST) on the server using `axios`. States are maintained using `redux` for the posts and user logged in.

Hosted on Netlify.

### Backend

Server is set up using `nodejs` and `express`, connecting to `mongodb` to store user and post data. Authentication is done by verify (or issuing) `jwt tokens` on receving a request from the client, storing the token in the response as http token so that a session is established. `Passport` is also used in the authentication process.

Image data are stored using `multer-gridfs-storage`, and id of the image is stored along with the other post data in the database. Routes and API are set up for clients to send requests for POST/GET/PUT.

Hosted on Heroku.
