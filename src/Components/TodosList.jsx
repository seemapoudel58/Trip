import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle, FaRegEdit } from "react-icons/fa";

const TodosList = ({
  todos,
  onDelete,
  onComplete,
  message,
  handleEdit,
  handleSave,
  handleChange,
  isEditing,
  editedText,
  editingId,
}) => {
  return (
    <ul className="bg-green-200 min-h-[30vh] py-20 flex flex-row px-8 flex-wrap justify-center items-center gap-4">
      {todos.map((item, index) => (
        <li
          className="bg-black/70 max-w-lg w-full aspect-[9/1] text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-between "
          key={index}
        >
           <span>
           {isEditing && editingId === index ? (
              <div className=" max-w-[17rem] flex flex-col">
                <textarea
                  value={editedText}
                  onChange={handleChange}
                  className='bg-transparent border border-gray-300 rounded-md p-2 text-white flex items-center justify-center'
                ></textarea>
                <button onClick={() => handleSave(index)}>Save</button>
              </div>
            )
           : (
              <span 
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            )}
          </span>
          <div className="flex items-center justify-between space-x-7">
            <span
              onClick={() => {
                onComplete(index);
              }}
              className="text-2xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
            >
              <FaCheckCircle />
            </span>
            <span
              onClick={() => {
                onDelete(index);
              }}
              className="text-3xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
            >
              <MdDelete />
            </span>
            <span
              onClick={() => {
                handleEdit(index);
              }}
              className="text-3xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
            >
              <FaRegEdit />
            </span>
          </div>
        </li>
      ))}
      {message && (
        <p className=" flex item-center justify-center text-red-600 font-2xl font-semibold">
          {message}
        </p>
      )}
    </ul>
  );
};

export default TodosList;
