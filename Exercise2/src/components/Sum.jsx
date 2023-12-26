/* eslint-disable react/prop-types */

const Sum = ({ base }) => {
  let sum = base.reduce((accum, item) => accum + item.exercises, 0)

  return (
    <strong>total of {sum} exercises</strong>
  )
}

export default Sum