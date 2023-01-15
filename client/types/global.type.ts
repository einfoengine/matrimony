export type layoutPayload = {
    id?:string,
    name: string,
    className: string,
    type: 'fixed' | 'fluid',
    rows: {
      cols:{
        className?: string,
        span?: number,
        components: JSX.Element
      }[]
    }[],
  }[]