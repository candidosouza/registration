const Body = (props) => {
    return props.clients?.map((client, i) => {
        return (
            <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.firstName}</td>
                <td>{client.age}</td>
            </tr>
        )
    });
}

export {Body}
