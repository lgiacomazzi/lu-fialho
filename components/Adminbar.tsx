import Dropdown from "./Dropdown";
import { signIn, signOut, useSession } from "next-auth/client";
import Box from "./Box";


const UserDropdown = (user) => {
  return (
    <Dropdown color="text_invert" size="small">
      <Dropdown.Button>{user.name}</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => signOut()}>Sair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}


const Adminbar = () => {
  const [session, loading] = useSession()

  if (session) {
    <Box bg="ui_dark" p={1}>
      <UserDropdown user={session.user} />
    </Box>
  }

  return <></>
};

export default Adminbar;
