import axios from 'axios';

const URL_API = 'https://api.adviceslip.com/advice'

const conselhos = async () => {
    try{
        const resposta = await axios.get(URL_API)
        return resposta.data
    }catch (erro){
        throw console.error();
    }
}

export default conselhos;