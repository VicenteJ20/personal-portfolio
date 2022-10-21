import { Form, Formik } from 'formik'
import { formSchema } from '../Schemas/form'
import { Input } from './Input'
import { Select } from './Select'
import '../Styles/formformik.css'
import { GenericTitle } from './GenericTitle'
import { Message } from './Message'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import { db } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'

export const FormFormik = () => {
  const [validUser, setUser] = useState(null)

  const captcha = useRef(null)

  const onChange = () => {
    if (captcha.current.getValue()) {
      setUser(true)
    } else {
      setUser(false)
    }
  }

  const contactsCollectionRef = collection(db, 'contacts')

  const onSubmit = async (values) => {
    if (validUser) {
      try {
        await addDoc(contactsCollectionRef, {
          name: values.name,
          email: values.email,
          company: values.company,
          service: values.serviceType,
          comments: values.comments
        }, window.location.assign('/Contact/submitted'))
      } catch (error) {
        console.log(error.name)
      }
    } else {
      console.log('debe marcar el recaptcha')
      setUser(false)
    }
  }

  return (
    <section className='Form-section'>
      <header className='header-form'>
        <GenericTitle title='Hola, Pongámonos en contacto' />
      </header>
      <Formik
        initialValues={{ name: '', email: '', company: '', serviceType: '', comments: '' }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <div className='form-div namediv'>
              <Input label='Nombre' name='name' type='text' placeholder='Ingrese su nombre' />
            </div>
            <div className='form-div emaildiv'>
              <Input label='Correo electrónico' name='email' type='email' placeholder='Ingrese su correo electrónico' />
            </div>
            <div className='form-div companydiv'>
              <Input label='Compañía (opcional)' name='company' type='text' placeholder='Ingrese nombre de compañía' />
            </div>
            <div className='form-div servicediv'>
              <Select label='Tipo de servicio' name='serviceType' placeholder='Seleccione un servicio'>
                <option value=''>Seleccione un servicio</option>
                <option value='web developer'>Desarrollador web</option>
                <option value='soporte TI'>Soporte TI</option>
                <option value='other'>Otro</option>
              </Select>
            </div>
            <div className='form-div messagediv'>
              <Message label='Mensaje (opcional)' name='comments' placeholder='Ingrese sus comentarios y/o ideas aquí...' />
            </div>
            <div className='recaptcha-div'>
              <ReCAPTCHA sitekey='6LdNzJkiAAAAAEaiE1ORus4tBVhVvNB-uLkPNU3O' onChange={onChange} ref={captcha} />
              <div className='message-captcha'>
                {
                  validUser === false ? <p>Debe hacer click en el captcha para continuar</p> : ''
                }
              </div>
            </div>
            <div className='button-div'>
              <p className='info-btn'>* Al enviar este formulario acepta la recopilación y utilización de la información proporcionada a través del formulario anterior.</p>
              <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
