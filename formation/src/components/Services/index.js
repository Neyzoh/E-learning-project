

let saveToken = (token) => {
    localStorage.setItem('token', token)
} 

let logout = () => {
    let token =localStorage.removeItem('token')
    window.location.load()
    return token;
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    
    return !!token
}

export const accountService = {
    saveToken, logout, isLogged
}