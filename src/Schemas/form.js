import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().min(3, 'El nombre debe ser de al menos 3 carácteres de longitud').required('Requerido'),
  serviceType: yup.string().oneOf(['web developer', 'soporte TI', 'other'], 'Formato inválido').required('Requerido'),
  email: yup.string().email('Debe ingresar un email válido').required('Requerido')
})
