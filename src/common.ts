
const coordString: (point:{x:number,y:number}) => string =
  (point) => JSON.stringify(point).replaceAll('"','')

export {coordString};