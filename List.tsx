import { useState, useEffect } from 'react';

export interface ShinobiObject {
    id: number,
    item: string,
    done: boolean
};

export function useBackendData() {
    const [taskAdd, setInputNewTask] = useState<string>("")
    const [data, setData] = useState<ShinobiObject[]>([]) 
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

     function Toggle(id: number) {
        setData(prevData => {
                const targetForDone = prevData.find(target => target.id === id)
                if (!targetForDone) return prevData
                const newDone = !targetForDone.done
                const updated = prevData.map(newData => 
                newData.id === id 
                ? {...targetForDone, done: newDone} 
                : newData
            )
         
            fetch(`/tasks/${id}`, {
             method: 'PATCH',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({done: newDone})
            }
        )
        return updated
     })
    
    };
    function Delete(id: number) {
        setData(data => 
            data.filter(delTask => {
                return (delTask.id !== id)
            })

    )

    };
    function AddTaskByInput(text: string) {
        setData(moreData => {
            return (
                [...moreData, {
                    id: moreData.length + 1,
                    item: text,
                    done: false
                }
            ]
            )
        }
        )
    };
    
    return (
        {data, taskAdd, Toggle, Delete, setInputNewTask, AddTaskByInput}
    );

  
};




