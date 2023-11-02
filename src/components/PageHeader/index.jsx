import './styles.scss'

export default function PageHeader({
    headerText, desc, svg
}) {
  return (
    <div className='page-header-container'>
        <div className='text'>
          <h1 className='header'>{headerText[0]} <br/> {headerText[1]}</h1>
          <p className='description'>{desc}</p>
        </div>
        <div className='svg-container'>
          {svg}
        </div>
      </div>
  )
}
