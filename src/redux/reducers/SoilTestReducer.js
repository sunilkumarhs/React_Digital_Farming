const initialstate = {
    users : [
        {
            id:1,
            name:'sunil',
            address:'hunasikote',
            pincode:563137,
            phonenumber:9741176872,
            email_id:'sunilhs@gmail.com'
        },
        {
            id:2,
            name:'SunilKumarHS',
            address:'Bangalore',
            pincode:560036,
            phonenumber:9741176872,
            email_id:'sunilhs@gmail.com'
        }
    ],
    user: null,

}

const SoilTestReducer = (state = initialstate, action) => {
    switch(action.type){

        case "SOILTEST_REGISTER":
            return{
                ...state,
                users : [...state.users, action.payload]
            }

        case "SLOGIN" :
            return{
                ...state,
                user : action.payload
            }  
            
        case "SLOGOUT" :
            return{
                ...state,
                user : null
            }      

        default :
             return state;    
    }
}
export default SoilTestReducer;