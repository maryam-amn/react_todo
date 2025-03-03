// besoin d'utuliser l'usestate pour afficher la nouvelle todo
// récuper l'input et l'a mettre dans la todo
const MyTodoListElement = ({ myTodoText }: { myTodoText: string }) => {
  return (
    <>
      <li>
        <div>
          {myTodoText}
          <time> 2023/03/02 </time>
        </div>

        <button className="button-img">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/sf-regular/50/FFFFFF/trash.png"
            alt="trash"
          />
        </button>
      </li>
    </>
  );
};

export default MyTodoListElement;
