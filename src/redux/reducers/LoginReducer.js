const initialstate = {
    users : [
        {
            id:1,
            types:"Farmer",
            name:'sunil',
            address:'hunasikote',
            pincode:563137,
            phonenumber:9741176872,
            email_id:'sunilhs@gmail.com',
            adharnumber:123456789012,
            username:'sunilkumarhs',
            password:"1718"
        },
        {
            id:2,
            types:"Buyer",
            name:'SunilKumarHS',
            address:'Bangalore',
            pincode:560036,
            phonenumber:9741176872,
            email_id:'sunilhs@gmail.com',
            adharnumber:123456789012,
            username:'sunil@1718',
            password:"Sunil@1718"
        }
    ],
    user: null,

}

const LoginReducer = (state = initialstate, action) => {
    switch(action.type){

        case "REGISTER":
            return{
                ...state,
                users : [...state.users, action.payload]
            }

        case "LOGIN" :
            return{
                ...state,
                user : action.payload
            }  
            
        case "LOGOUT" :
            return{
                ...state,
                user : null
            }      

        default :
             return state;    
    }
}
export default LoginReducer;