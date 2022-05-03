import axios from 'axios'

export const  DateShower = async () => {
    const response = await axios.get('http://api.codebazan.ir/time-date/?json=fa');
    return response.data
   
}