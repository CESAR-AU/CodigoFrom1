import { useState } from "react";
/**
 * Componente formulario
 * @returns
 */
function Form(props) {
  const { onAddUser = () => {} } = props;
  const [user, setUser] = useState({
    nombres: "",
    apellidos: "",
    edad: 20,
    pais: "",
    foto: "",
    correo: "",
    detalles: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Evento en el hijo: ", e.target);
        onAddUser({ ...user });
      }}
      className=""
    >
      <input
        type="text"
        className="p-4 border border-gray-400 rounded mr-2"
        required
        value={user.nombres}
        onChange={(e) => setUser({ ...user, nombres: e.target.value })}
      />
      <button className="bg-emerald-500 px-12 py-4 font-bold rounded">
        Agregar
      </button>
    </form>
  );
}

/**
 * Componente card
 * @returns
 */
function List(props) {
  const { users = [], onDelete = () => {} } = props;
  console.log("Usuarios recibidos desde el padre: ", users);
  return (
    <ul className="">
      {users.map((user, key) => {
        console.log(`Usuario ${key}:`, user);
        return(
          <li key={key} className="flex justify-around items-center">
            {user.nombres}
            <button onClick={()=>{
              window.confirm(`Estas seguro de elimar al usuario seleccionado: ${user.nombres}?`) ? onDelete(user) : console.log("Operacion cancelada.");
            }} className="bg-red-900 p-2">Eliminar</button>
          </li>
        )
      })}
    </ul>
  );
}
/**
 * Principal
 * @returns
 */
export function PageUsuarios() {
  const [users, setUsers] = useState([]);

  return (
    <div className="">
      <Form
        onAddUser={(user) => {
          console.log("Usuario recibido por el callback: ", user);
          setUsers((u) => [...u, user]); //hace una copia de si mismo para luego agregarle un nuevo obj
        }}
      />
      <List
      users={users}
      onDelete={(el)=>{
        console.log("OnDelete: ", el);
        setUsers(users.filter((element)=> element.nombres !== el.nombres));
      }}
      />
    </div>
  );
}
