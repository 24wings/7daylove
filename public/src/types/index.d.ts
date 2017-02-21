


export interface RtnResult {
    // 服务器状态,0 ,1
    state: 0 | 1;
    // 服务器返回结果
    issuccess: Boolean;
    // 服务器返回数据
    data: any;
    errorMsg?: string;


}

export interface User {
    name?:string;
    phone: string;
    password: string;
}