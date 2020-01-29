import axios from 'axios';
import { servicesRoutes, ErrorResponse, Header, SuccessResponse, URL_API } from './Api';

let result;

export async function Get(body, setLoading) {
    setLoading(true);
    await axios.get(
        `${URL_API}${servicesRoutes.usersGet}${body}`,{ params: {}, headers: await Header() })
        .then((res) => {
            result = SuccessResponse(res);
        }).catch((error) => {
            result = ErrorResponse(error);
        });
    setLoading(false);
    return result;
}
