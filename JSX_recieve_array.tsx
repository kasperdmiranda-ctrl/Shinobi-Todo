import { useBackendData } from "./List.tsx";


export function ReceiveArray() {
  const slash = new Audio('/public/shinsounds/del.mp3');
  const oof = new Audio('/public/shinsounds/oof.mp3');
  const { data, taskAdd, Toggle, Delete, setInputNewTask, AddTaskByInput } = useBackendData();
  return (
    <div>
      <h1>忍者 TODO</h1>
      {data.map((shinobiTaskUI) => (
        <p
          key={shinobiTaskUI.id}
          onClick={() => {
            Toggle(shinobiTaskUI.id);
            console.log(shinobiTaskUI.id);
          }}
        >
          <button className="del-button" 
          onClick={() => {
          oof.play();
          Delete(shinobiTaskUI.id)}}
          >
            消去
            </button>

          {shinobiTaskUI.item}
        </p>
      ))}
<div className="add_row">
      <input className="input"
        value={taskAdd}
        onChange={(event) => setInputNewTask(event.target.value)}
      />

      <button className="add-button"
        onClick={() => {
          slash.play();
          AddTaskByInput(taskAdd);
          setInputNewTask("");
        }}
      >
        追加
      </button>
      </div>
      <img 
      className="shinMask" 
      src="/public/Shinobipics/shinMask.png" 
      alt="mask"/>
      <img 
      className="shinMask2" 
      src="/public/Shinobipics/shinMask.png" 
      alt="mask"/>
      <img 
      className="shinMask3" 
      src="/public/Shinobipics/shinMask.png" 
      alt="mask"/>
      <img
      className="bird"
      src="/public/Shinobipics/birdybird.png"
      alt="crane"/>
      <img
      className="bird2"
      src="/public/Shinobipics/bird.png"
      alt="down"/>
    </div>
    
  );
}
