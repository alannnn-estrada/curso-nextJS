import { Users } from "@/components/Users";

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();
  return (
    <div>
      <div className="container mx-auto p-4 text-center gap-5">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="text-lg text-slate-200">List of users from <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500">ReqRes.in</a></p>
      </div>
      <Users users={users} />
    </div>
  )
}

export default HomePage