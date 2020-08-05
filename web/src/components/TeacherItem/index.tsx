import React from 'react';

import './styles.css';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/49079754?s=460&u=9e69ab7108dec45445f7ed05db9ac5e97ad0a552&v=4" alt="Eduardo Freitas"/>
        <div>
          <strong>Eduardo Freitas</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          preço/hora
          <strong>
            R$ 80,00
          </strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
       
      