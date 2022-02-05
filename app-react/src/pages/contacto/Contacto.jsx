import {useState} from "react";

import "./contacto.scss";

export function PageContacto() {
    const [form, setForm] = useState({
      name: '',
      lastname: '',
      phone: '',
      email: '',
      country: '',
      budget: '',
      comment: ''
    });

  return (
    <div className="page-contacto container">
      <form onSubmit={(event) => {
        event.preventDefault()

        console.log("se  envia al back end!!!!", form)
      }}>
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <input
            type="text"
            placeholder="Nombre"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.name}
            required
            onChange={(event) => {
              // console.log(event.target.value)
              // const copyObject = {...form, name: event.target.value}
              // setForm(copyObject)

              setForm((state) => ({...state, name: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.lastname}
            required
            onChange={(event) => {
              setForm((state) => ({...state, lastname: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Telefono"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            value={form.phone}
            required
            onChange={(event) => {
              setForm((state) => ({...state, phone: event.target.value}))
            }}
          />
          <input
            type="text"
            placeholder="Correo"
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
            value={form.email}
            onChange={(event) => {
              setForm((state) => ({...state, email: event.target.value}))
            }}
          />
          <select
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
            value={form.country}
            onChange={(event) => {
              setForm((state) => ({...state, country: event.target.value}))
            }}
          >
            <option value="">Seleccionar pais</option>
            <option value="peru">Peru</option>
            <option value="venezuela">Venezuela</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
          </select>
          <select
            className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
            required
            value={form.budget}
            onChange={(event) => {
              setForm((state) => ({...state, budget: event.target.value}))
            }}
          >
            <option value="">Presupuesto</option>
            <option value="500-1000">500 a 1000</option>
            <option value="1000-1500">1000 a 1500</option>
            <option value="1500-2000">1500 a 2000</option>
          </select>
          <textarea
            className="w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900 col-span-2"
            placeholder="Agrega un comentario"
            rows="10"
            required
            value={form.comment}
            onChange={(event) => {
              setForm((state) => ({...state, comment: event.target.value}))
            }}
          ></textarea>
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-sky-600 py-8 px-20 text-white rounded-xl min-w">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
