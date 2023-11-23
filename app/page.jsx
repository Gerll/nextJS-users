import Users from '@/components/Users';

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}


async function IndexPage() {
  const users = await fetchUsers()
  //console.log(users);

  return(
    <div>
      <h1>IndexPage</h1>
      <div>
        <Users users={users}/>
      </div>
    </div>
  )
}

export default IndexPage