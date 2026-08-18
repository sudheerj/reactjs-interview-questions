import { useState, useMemo, useEffect } from "react";
import type { User } from "./types/user";
import { getUsers } from "./services/userService";
import { SearchBar } from "./components/SearchBar";
import { Pagination } from "./components/Pagination";
import { DataTable } from "./components/DataTable";

import "./App.css";

const PAGE_SIZE = 5;

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState("");

  //Fetch data
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);

        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        SetError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  //Filtered users
  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return users;
    }

    return users.filter(
      (user) =>
        user.name.includes(query) ||
        user.email.includes(query) ||
        user.company.name.includes(query),
    );
  }, [search, users]);

  //Pagination
  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredUsers.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredUsers]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  {
    loading && <div className="status">Loading...</div>;
  }

  {
    error && <div className="status error">{error}</div>;
  }

  return (
    <main className="container">
      <header>
        <h1>User management</h1>
        <span>Total users: {filteredUsers.length}</span>
      </header>
      <SearchBar value={search} onChange={handleSearch}></SearchBar>
      <DataTable users={paginatedUsers}></DataTable>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        ></Pagination>
      )}
    </main>
  );
}
