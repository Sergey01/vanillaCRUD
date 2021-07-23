// user middleware
// plan for user and session middleware:
// session timeout - 1hr
// let's say the user already has an account but is not logged in in their browser
// verify user checks if user has session cookie => if no session cookie:
// redirect to /login
// if session.cookie but no active session in db - redirect to /login (session cookie value will be overwritten upon successful login)
// user logs in successfully =>
// a session for the user is set up and a sessionID cookie is created with a timeout of X (10 mins maybe?) as /login now redirects
// back to the '/' path.
// since there is now a session cookie and a valid session, the verifyUser (or is it verifySession?) middleware sticks the user's ID in req.userID.
// this is used for db calls.
// does all this mean that a successful transaction between the user and the server pushes the session timeout timestamp forward into the future?