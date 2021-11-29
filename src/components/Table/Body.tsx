const Body = (props) => {
    return props.clients?.map((client, i) => {
        return (
            <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-50'}`}>
                <td className="text-left p-4">{client.firstName}</td>
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.age}</td>
            </tr>
        )
    });
}

export {Body}
