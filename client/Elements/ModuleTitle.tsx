

const ModuleTitle = ({className, children}:{ className?:string, children:JSX.Element|string}) => {
  return (
    <h4 className={`ex-element ex-module-title ${className}`}>{children}</h4>
  )
}

export default ModuleTitle