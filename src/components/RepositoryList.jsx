import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
import { useEffect, useState } from "react"

const repository = {
    name: 'Unform',
    description:'Form in React',
    link:'https://github.com/unform/unform'
}

export function RepositoryList () {
    const [repositories, setRepositories] = useState([])
    
    useEffect(() => {
        fetch('http://api.github.com/users/tarcisiofreire/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}