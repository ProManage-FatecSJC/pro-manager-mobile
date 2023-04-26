import { AsyncStorage } from "react-native"
import {decode as atob, encode as btoa} from 'base-64'


export class SessionController {

    public async setToken(data: any){
        try {
            await AsyncStorage.setItem('token', 'Bearer ' + data.token)
        } catch (error) {
            console.log(error)
        }
    }

    public async getToken(){
        try {
            return await AsyncStorage.getItem('token')
        } catch (error) {
            console.log(error)
        }
    }

    public async getName(){
        try {
            let token = await AsyncStorage.getItem('token') as string
            token = token.split(' ')[1]
            let tokenData = JSON.parse(atob(token.split('.')[1]))
            return tokenData.name
        } catch (error) {
            console.log(error)
        }
    }

    public async clearSession(){
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.log(error)
        }
    }
}