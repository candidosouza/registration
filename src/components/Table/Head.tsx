const Head = () => {
    return (
        <tr className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
        `}>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
        </tr>
    )
}

export { Head }
