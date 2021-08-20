export const inc = () => {
  return {
    type: 'INC'
  }
}

export const dec = () => ({type: 'DEC'}) // action creator
export const rand = () => {
  return {
    type: 'RAND',
    value: Math.floor(Math.random() * 10)
  }
}
