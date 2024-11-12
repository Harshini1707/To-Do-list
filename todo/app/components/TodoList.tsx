const TodoList = () => {
  return (

<div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
        <tr className="bg-slate-200">
            <th>Name</th>
            <th>Favourite Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cy Ganderton</td>
            <td>Blue</td>
        </tr>
    </tbody>
  </table>
</div>

  );
}

export default TodoList
