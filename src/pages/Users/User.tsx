import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./User.scss"
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import {useState} from "react"

    
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];


const Users = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="user">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>{setOpen(true)}}>Add new user</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open? <Add columns={columns} slug="user" setOpen = {setOpen} /> :""}
    </div>
  )
}

export default Users