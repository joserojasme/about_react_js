export const URL_API = 'https://reqres.in/api/';

export const servicesRoutes = {
    usersGet: `users?page=`,
}

export async function Header() {
    return {
        'Accept': 'application/json',
        'Content-type': 'application/json', 
    }
}

export function SuccessResponse(res) {
    let response = { ...res.data, status: res.status };
    return response;
}

export function ErrorResponse(error) {
    let response;
    switch (error) {
        case error.response:
            response = { data: error.response.data, status: error.response.status };
            break;
        case error.request:
            response = { data: error.message, status: error.request.status };
            break;
        default:
            response = { data: error.message, status: 0 };
            break;
    }
    return response;
}
