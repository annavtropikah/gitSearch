
export async function getUsers(login:string) {
    const response=await fetch(`https://api.github.com/search/users?q=${login}`)
    if (response.status === 201) {
        const data = await response.json();
        console.log(data);
        return data; 
    }
    throw new Error("Ошибка");
}