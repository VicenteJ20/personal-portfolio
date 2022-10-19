import '../Styles/Form.css'
import { GenericTitle } from './GenericTitle'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

export function Contact () {
  const [newName, setName] = useState('')
  const [newEmail, setEmail] = useState('')
  const [newCompany, setCompany] = useState('')
  const [newService, setService] = useState('')
  const [newMessage, setMessage] = useState('')

  const contactsCollectionRef = collection(db, 'contacts')

  const createContact = async () => {
    try {
      await addDoc(contactsCollectionRef, { name: newName, email: newEmail, company: newCompany, service: newService, message: newMessage })
    } catch (error) {
      console.log(error.name)
    }
  }

  return (
    <section className='Form-section'>
      <header className='header-form'>
        <GenericTitle title='Hola, Pongámonos en contacto' />
      </header>
      <form className='form' onSubmit={createContact}>
        <div className='form-div namediv'>
          <label className='label-form'>Nombre</label>
          <input className='input-form' type='text' placeholder='Ingrese su nombre...' onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='form-div emaildiv'>
          <label className='label-form'>Correo electrónico</label>
          <input className='input-form' type='email' placeholder='Ingrese su correo electrónico...' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='form-div companydiv'>
          <label className='label-form' htmlFor='company'>Compañía <span className='span-label'>(Opcional)</span></label>
          <input className='input-form' id='company' name='company' type='text' placeholder='Nombre de la compañía a la que representa' onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className='form-div servicediv'>
          <label className='label-form' htmlFor='option-form'>Tipo de servicio</label>
          <select id='option-form' name='option-form' className='optionform' onChange={(e) => setService(e.target.value)} required>
            <option value='' hidden>Seleccione una opción</option>
            <option value='webdev'>Desarrollo web</option>
            <option value='techsupport'>Soporte técnico</option>
            <option value='other'>Otro</option>
          </select>
        </div>
        <div className='form-div messagediv'>
          <label className='label-form' htmlFor='text-area'>Mensaje de contacto</label>
          <textarea id='text-area' name='text-area' className='textarea' placeholder='Ingrese sus comentarios y/o ideas aquí...' onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className='button-div'>
          <p className='info-btn'>* Al enviar este formulario acepta la recopilación y utilización de la información proporcionada a través del formulario anterior.</p>
          <button className='btn submit-btn'>Enviar</button>
        </div>
      </form>
    </section>
  )
}
