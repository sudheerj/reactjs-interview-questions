import type {User} from "../types/user";

interface DataTableProps {
    users: User[]
}

export function DataTable({users}: DataTableProps) {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="empty">
                                No users found
                            </td>
                        </tr>
                    ): users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}