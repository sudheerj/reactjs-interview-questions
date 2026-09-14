import { useFetch } from "./useFetch";

interface User {
    name: string;
    email: string;
}
export default function App() {
    const {data, loading, error} = useFetch<User>("https://jsonplaceholder.typicode.com/users/1");

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }
    return(
        <div>
            <h2>useFetch</h2>

            <div>
                <p>{data?.name}</p>
                <p>{data?.email}</p>
            </div>
        </div>
    )
}