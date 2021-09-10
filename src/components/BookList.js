import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';

function BookList() {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
            .then((results) => {
                results.json().then((data) => {
                    console.log("result", data)
                    setBooksData(data)
                })
            })
    }, [])

    return (
        <>

            <div className="Table">
                <Table style={{ color: "white" }}>
                    <thead >
                        <tr>
                            <th>Book #</th>
                            <th>Title</th>
                            <th>Pages</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksData.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.pages}</td>
                                <td>{data.releaseDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default BookList;