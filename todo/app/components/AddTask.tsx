const AddTask = () => {
  return (
    <div className="flex space-x-2 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font- w-full py-2 px-4 rounded">
     <button>ADD NEW TASK </button> 
    <div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
</svg>
</div>
    </div>
  )
}
export default AddTask;
