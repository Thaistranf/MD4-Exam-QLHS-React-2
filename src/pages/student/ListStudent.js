import {useEffect, useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";
// import {Link} from "react-router-dom";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ListStudent() {
    let [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/students').then((res) => {
            setStudents(res.data);
        })
    }, []);

    return (
        <DataGrid
            rows={students.map(item => (
                {
                    id: item.id,
                    name: item.name,
                    dateOfBirth: item.dateOfBirth,
                    address: item.address,
                    phone: item.phone,
                    email: item.email,
                    classroom: item.classroom.className,
                    // action: (
                    //     <>
                    //         <Button>Primary</Button>
                    //         <IconButton aria-label="delete">
                    //             <DeleteIcon />
                    //         </IconButton>
                    //         {/*<button variant="contained" color="primary"><Link to='edit/:id'>Edit</Link></button>*/}
                    //         {/*<button variant="contained" color="secondary"><Link to='delete/:id'>Delete</Link></button>*/}
                    //     </>
                    // ),
                }
            ))}
            columns={[
                { field: 'id', headerName: 'ID', width: 70 },
                { field: 'name', headerName: 'Name', width: 200 },
                { field: 'dateOfBirth', headerName: 'Date of birth', width: 150 },
                { field: 'address', headerName: 'Address', width: 170 },
                {
                    field: 'phone',
                    headerName: 'Phone',
                    // type: 'number',
                    width: 150,
                },
                { field: 'email', headerName: 'Email', width: 210 },
                { field: 'classroom', headerName: 'Classroom', width: 130 },
                {
                    field: 'action',
                    headerName: 'Action',
                    headerAlign: 'center',
                    width: 200,
                    align: 'center',
                    renderCell: (params) => {
                        return (
                            <>
                                <Button aria-label="edit"><EditIcon color="action" /></Button>
                                <Button aria-label="delete"><DeleteIcon color="action" /></Button>
                                <Button aria-label="view"><VisibilityIcon color="action" /></Button>
                            </>

                            // <Link to={`/delete/${params.row.id}`}>Delete</Link>
                            // <Link to={`/edit/${params.row.id}`}>Edit</Link>
                        )

                    }
                },
            ]}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    )
}

export default ListStudent;