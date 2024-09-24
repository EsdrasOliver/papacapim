import api from "@/api/api"

interface FormatSeguindo {
    token: string | null
    user: string
}

export const Seguindo = async ({token, user}: FormatSeguindo) => {
    try {
        const response = await api.get(`/users/${user}/followers`, {
            headers: {
                'Content-Type': 'application/json', "x-session-token": token
            }
        })

        return response
    } catch (error) {
        console.log(error)
    }
}