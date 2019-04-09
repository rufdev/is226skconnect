export default class Gate{

    constructor(user){
        this.user = user;
    }


    isAdmin(){
        return this.user.role_id === '1';
    }
    isSKAdmin(){
        return this.user.role_id === '2';
    }
    isSKMember(){
        return this.user.role_id === '3';
    }
    // isAdminOrAuthor(){
    //     if(this.user.type === 'admin' || this.user.type === 'author'){
    //         return true;
    //     }

    // }
    // isAuthorOrUser(){
    //     if(this.user.type === 'user' || this.user.type === 'author'){
    //         return true;
    //     }

    // }



}

