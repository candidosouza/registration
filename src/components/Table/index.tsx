import { Client } from "../../core/Client";
import { Body } from "./Body";
import { Head } from "./Head";

interface TableProps {
    clients: Client[]
}

const Table = (props: TableProps) => {
    return (
        <table className={`
            w-full
            rounded-xl overflow-hidden
        `}>
            <thead>
                <Head />
            </thead>
            <tbody>
                <Body clients={props.clients} />
            </tbody>
        </table>
    )
}

export { Table }