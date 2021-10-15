import { useState } from "react"
import { useAction } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelector"


const RepositoriesList:React.FC = () => {

    const [term, setTerm] = useState("")    
    const {searchRepositories}:any = useAction()
    const { data, error, loading} = useTypedSelector((state) => state.repositories)
    


    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term)
        console.log(data)
        
    }

    return ( <div>
        <form onSubmit={onSubmit}>

            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>


        </form>

        {error && <h1>{error}</h1>}
        {loading && <h1>loading....</h1>}
        {!error && !loading && data.map((name:string) => <div key={name}>{name}</div>)}


    </div>


    )


}

export default RepositoriesList