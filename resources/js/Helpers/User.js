import Token from "./Token";
import Appstorage from "./Appstorage";

class User{
 responseAfterLogin(res){
     const access_token = res.data.access_token
     const username = res.data.user
     if (Token.isValid(access_token)) {
         Appstorage.store(access_token,username)
     }
 }

 hasToken(){
     const storeToken = localStorage.getItem(token);
     if (storeToken) {
        return Token.isValid(storeToken) ? true : false
     }
     false
 }

 loggedIn(){
     return this.hasToken()
 }

 name(){
     if (this.loggedIn()) {
         return localStorage.getItem('user')
     }
 }
    id(){
        if (this.loggedIn()) {
            const payload = Token.payload(localStorage.getItem('user'))
            return payload.sub
        }
        false
    }

}

export default User = new User();