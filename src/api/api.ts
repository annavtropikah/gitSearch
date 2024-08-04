import { TOKEN } from "./constants";
import {PER_PAGE} from "../shared/utils";

export async function getUsers(login: string, page: number) {
    const params = new URLSearchParams({
        q: login,
        page: String(page),
        per_page: String(PER_PAGE),
    }).toString();

    const response=await fetch(`https://api.github.com/search/users?${params}`, {
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
        }
    })

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    throw new Error("Ошибка");
}

export async function getUserRepos(login: string) {
    const response= await fetch(`https://api.github.com/users/${login}/repos`, {
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
        }
    })

    if (response.ok) {
        const data = await response.json();

        return data?.length;
    }

    throw new Error("Ошибка");
}
