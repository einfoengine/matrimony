const Heading = ({
  title,
  className
}:{
  title:string
  className?:string
}) => {
  return (
    <h2 className={`ex-heading ${className&&className}`}>{title}</h2>
  )
}

export default Heading