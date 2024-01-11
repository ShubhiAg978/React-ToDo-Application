// import React from 'react'
// import '../styles/Task.css'

// const Task = (props) => {

//   const deleteTask = (id) => {
//     const newData = task.filter(item => item.id !== id);
//     // Update the state with the new array
//     setTask(newData);
//   }

//   return (
//     <div className="Task">
//         <div className='TextPlace'>
//             <p>{props.title}</p>
//             <span>{props.description}</span>
//         </div>
//         <div>
//             <button onClick={deleteTask}>-</button>
//         </div>
//     </div>

//     <div className="Task" key={index}>
//       <div className='TextPlace'>
//           <p>{item[0]}</p>
//           <span>{item[1]}</span>
//       </div>
//       <div>
//           <button onClick={() => deleteTask(index + 1)}>-</button>
//       </div>
//     </div>
//   )
// }

// export default Task