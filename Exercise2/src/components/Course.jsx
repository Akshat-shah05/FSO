/* eslint-disable react/prop-types */
import Header from "./Header"
import Part from "./Part"
import Sum from "./Sum"

const Course = ({ course }) => {
  return (
    <>
        <Header name={course.name}/>
        {course.parts.map((part) => {
            return (
                <Part 
                    key={part.id}
                    name={part.name}
                    ex={part.exercises}
                />
            )
        })}
        <Sum base={course.parts} />

    </>
  )
}

export default Course