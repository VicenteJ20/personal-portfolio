import { CardHobbies } from './Cards'
import { GenericTitle } from './GenericTitle'
import '../Styles/Hobbies.css'

export function Hobbies () {
  return (
    <section className='Hobbies' id='Hobbies'>
      <GenericTitle title='Hobbies' divWidth='20%' />
      <div className='grid-hobbies-cards'>
        <CardHobbies imgUrl='biking.jpg' titleDesc='Ciclismo de montaña' title='Practicar ciclismo de montaña' description='Realizar ciclismo de ruta y montaña por las mañanas, al menos 3 días a la semana.' />
        <CardHobbies imgUrl='dog.jpg' titleDesc='Thor en el río' title='Caminar con mi perro (Thor)' description='Paseos diarios de alrededor de 40 minutos a 1 hora por mi ciudad' />
        <CardHobbies imgUrl='learn.jpg' titleDesc='Estudio de nuevas tecnologías' title='Aprender nuevas tecnologías' description='Aprendo tecnologías nuevas, para mantenerme actualizado acorde a los nuevos estándares.' />
        <CardHobbies imgUrl='coffee.jpg' titleDesc='Mug de café negro mínimo 3 al día' title='Tomar café' description='Como todo desarrollador soy ligeramente adicto a la cafeína.' />
        <CardHobbies imgUrl='code.jpg' titleDesc='Setup móvil para programar' title='Escribir código' description='Así como escribo código por trabajo o tareas, también lo hago como hobbie para proyectos personales.' />
      </div>
    </section>
  )
}
