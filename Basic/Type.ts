let firstName =<any> "Mark";
let lastName = "Doe" as any;


let user = {
    name: "Mark",
    email: "mark@email.com"
};


function fetchUser {
    return user;
}


const FetchedUser = fetchUser();