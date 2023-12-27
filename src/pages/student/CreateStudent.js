import {Field, Formik} from "formik";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {add} from "../../redux/services/studentService";
import {Button} from "@mui/material";

export default function CreateStudent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const addForm = (values) => {
        console.log(values)
        // dispatch(add(values)).then(() => {
        //     navigate('/students/list');
        // })
    }
    return (
        <>
            <div style={{width:"30%", marginLeft:"35%"}}>
                <h1>Create student</h1>
                <Formik
                    initialValues={{
                        name: "",
                        dateOfBirth: "",
                        address: "",
                        phone: "",
                        email: "",
                        classroom: "",
                    }}
                    onSubmit={addForm}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <Field type="text" className="form-control" name={"name"} id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
                            <Field type="date" className="form-control" name={"dateOfBirth"} id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                            <Field type="text" className="form-control" name={"address"} id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                            <Field type="text" className="form-control" name={"phone"} id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <Field type="text" className="form-control" name={"email"} id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Classroom</label>
                            <Field className="form-control" name={"classroom"} as={"select"} id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                                <option value="red">Open this select menu</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <Button variant="contained" onClick={addForm}>Submit</Button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}