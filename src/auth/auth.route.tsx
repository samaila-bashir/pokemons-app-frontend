import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./login/Login";
import Signup from "./signup/Signup";

const AuthRoute = () => { 
    return (
        <Switch>
            <Route exact path="/auth/login">
                <Login />
            </Route>
            <Route path="/auth/signup">
                <Signup />
            </Route>
            <Redirect path="*" to="/auth/login" />       
        </Switch>
    );
}

export default AuthRoute; 