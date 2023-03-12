import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticatesSignup =async (data) => {
        try{
            return await axios.post(`${URL}/signup`, data);
        }catch(err){
                console.log(err, "while calling Signup api ");
        }

}