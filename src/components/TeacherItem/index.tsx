import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps{
    teacher: Teacher;
}

//function TeacherItem(){
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                

                    <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a target="blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem;


/*
<article className="teacher-item">
                    <header>
                        <img src="https://instagram.fubt1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75280196_747899542397651_4926991176923348992_n.jpg?_nc_ht=instagram.fubt1-1.fna.fbcdn.net&_nc_ohc=7bg9zZgnyLIAX_sKPjP&oh=581a49e1e8d91ce66cbae8909e9cc4e2&oe=5F52C6FA" alt="valbão"/>
                        <div>
                            <strong>Valber</strong>
                            <span>Marcenaria</span>
                        </div>
                    </header>
                

                    <p>
                    Lorem ipsum dolor sit amet, 
                    <br/> <br/>
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
                */