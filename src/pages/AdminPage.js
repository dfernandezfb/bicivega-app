import AdminTable from "../components/AdminTable/AdminTable";

const AdminPage = () => {
  return ( 
    <div className="container my-4">
      <h1>Página de administración</h1>
      <p> En esta página podrás agregar, editar, y eliminar las bicicletas que tengas en tu página (ABM)</p>
      <AdminTable/>
    </div>
   );
}
 
export default AdminPage;