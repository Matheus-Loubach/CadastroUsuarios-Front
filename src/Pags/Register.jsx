import React, { useState } from 'react';
import '../ComponetsCSS/Register.css'


const Register = () => {

    const [user, setUser] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        telefone: '',
        profissao: '',
    });

    const [isChecked, setIsChecked] = useState(false);
    const [message, setmessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = "https://cadastro-usuarios-back-e9lj.vercel.app/api/register";

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(user),
            },

            );
            const json = await response.json();
            setmessage(json.msg)

        } catch (error) {
            setmessage('Erro ao adicionar o Usuario')
        }
    };

    const handleReset = () => {
        setmessage(false);
        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
        setUser({
            nome: '',
            sobrenome: '',
            dataNascimento: '',
            telefone: '',
            profissao: '',
        });

    };

    const handleCheckbox = (e) => {
        setIsChecked(e.target.checked);
      };

    return (
        <div>
            <form className='container_input' >
                <div>
                    <input
                        type="text"
                        name="nome"
                        placeholder='NOME'
                        onChange={(e) => setUser({ ...user, nome: e.target.value })}
                        autocomplete="off"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="sobrenome"
                        placeholder='SOBRENOME'
                        onChange={(e) => setUser({ ...user, sobrenome: e.target.value })}
                        autocomplete="off"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="TELEFONE"
                        placeholder='TELEFONE'
                        onChange={(e) => setUser({ ...user, telefone: e.target.value })}
                        autocomplete="off"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="profissao"
                        placeholder='PROFISSÂO'
                        onChange={(e) => setUser({ ...user, profissao: e.target.value })}
                        autocomplete="off"
                        required
                    />
                </div>
                <div>
                    <input
                        type="Date"
                        name="dataNascimento"
                        onChange={(e) => setUser({ ...user, dataNascimento: e.target.value })}
                        autocomplete="off"
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckbox}
                            required
                        />
                        Aceite dos termos de uso e da política de privacidade
                    </label>
                </div>

                <div className='bt'>
                    <button onClick={(e) => handleSubmit(e)} disabled={!isChecked}  >Enviar</button>
                    <button onClick={() => handleReset()}>Reset</button>
                    {message ? <p className='message'>{message}</p> : <p className='messageErr'>{message}</p>}
                </div>
        
            </form>
        </div>
    )
}

export default Register