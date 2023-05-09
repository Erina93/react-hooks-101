const events = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{state.events.map((event, index) => (<Event key={index} event={event}/>))}</tbody>
      </table>
    </>
  );
};
