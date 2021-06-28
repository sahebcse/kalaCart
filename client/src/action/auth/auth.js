import * as api from '../../api'

export const login = (sendData,router)=> async (dispatch)=>{
    const {data} = await api.login(sendData.result);
    dispatch({type:'AUTH', payload:sendData});
    router.push('/');
}