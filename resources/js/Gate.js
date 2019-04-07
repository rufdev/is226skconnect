export default class Gate{

    constructor(user){
        this.user = user;
    }


    isAdmin(){
        return this.user.type === 'admin';
    }
    isSKAdmin(){
        return this.user.type === 'skadmin';
    }
    isSKMember(){
        return this.user.type === 'skmember';
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

