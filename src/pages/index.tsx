import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Client } from "../core/Client";

const Home = () => {

  const clients = [
    new Client('Candido', 42, '777'),
    new Client('Felipe', 8, '777'),
    new Client('Vitor', 64, '777'),
    new Client('Helena', 63, '777'),
  ]

  return (
    <div className={`
      flex 
      justify-center
      items-center
      h-screen
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white
    `}>
        <Layout titulo="Cadastro Simples">
          <Table clients={clients}></Table>
        </Layout>
    </div>
  )
}

export default Home;
