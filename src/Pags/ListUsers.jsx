import React, { useState } from 'react'
import { useEffect } from 'react'
import '../ComponetsCSS/ListUsers.css'

const ListUsers = () => {

    const API_URL = 'https://cadastro-usuarios-back-e9lj.vercel.app/api/users'

    const [listUser, setListUser] = useState();

    const Users = async () => {

        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            setListUser(json);
        } catch (error) {
            console.log(error);
        }
    }

    if (!Users) {
        return <div>Carregando Tabela...</div>
    } else {
        Users();
    }


    return (
        <div>

            {listUser ? listUser.map((item) => (

                <div key={item._id} className='container_list'>
                    <div>
                        <p>Nome</p>
                        <p>{item.nome}</p>
                    </div>
                    <div>
                        <p>Sobrenome</p>
                        <p>{item.sobrenome}</p>
                    </div>
                    <div>
                        <p>Nascimento</p>
                        <p>{item.dataNascimento}</p>
                    </div>
                    <div>
                        <p>Telefone</p>
                        <p>{item.telefone}</p>
                    </div>
                    <div>
                        <p>Profissão</p>
                        <p>{item.profissao}</p>
                    </div>
                </div>

            )) : []}
        </div>
    )
}

export default ListUsers