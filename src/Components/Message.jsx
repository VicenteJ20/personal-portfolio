import { useField } from 'formik'

export const Message = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className='label-form'>{label}</label>
      <textarea {...field} {...props} className={`textarea ${meta.touched && meta.error ? 'input-error' : ''}`} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}
