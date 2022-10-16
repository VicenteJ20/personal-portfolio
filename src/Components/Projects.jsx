import { CardProject } from './Cards'
import { GenericTitle } from './GenericTitle'
import '../Styles/Projects.css'

export function Projects () {
  return (
    <section className='Recent-projects'>
      <GenericTitle title='Proyectos Recientes' divWidth='30%' />
      <div className='projects-grid'>
        <CardProject title='Landing Page para venta de servicos' description='Web diseñada para que pequeñas y medianas empresas puedan ofrecer sus productos de forma fácil y eficiente a sus potenciales clientes.' imgUrl='office-team.jpg' to='/Projects/Details/Landing-Page-Services' />
        <CardProject title='Encriptador de Texto - Oracle One + Alura.' description='Web básica responsiva que permite "encriptar texto". No utiliza ningún estándar de encriptación, se limita al uso de .replace' imgUrl='cryptography.jpg' />
        <CardProject title='Calculadora básica responsiva' description='Aplicación web creada con ReactJS y Bootstrap para realizar cálculos aritméticos simples.' imgUrl='calculator.jpg' />
        <CardProject title='Web para presentación de activos' description='Web diseñada para mostrar de forma agradable el balance económico semanal de empresas o usuarios individuales' imgUrl='finances.jpg' />
        <CardProject title='Calculadora de propinas responsive' description='Aplicación web diseñada para que se realice el cálculo de propinas con porcentaje variable de forma fácil y rápida.' imgUrl='tips.jpg' />
        <CardProject title='Rastreador de direcciones IP' description='Aplicación web diseñada para el rastreo de direcciones IPV4' imgUrl='tracker.jpg' />
        <CardProject title='Formulario de compra de productos' description='Formulario web diseñado para que clientes puedan realizar compras de productos de forma fácil y sencilla' imgUrl='shopping-cart.jpg' />
      </div>
    </section>
  )
}
