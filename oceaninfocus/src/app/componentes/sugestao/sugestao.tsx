'use client';

import React, { FormEvent } from 'react';

// Definindo a interface para os dados do formulário
interface FormularioSugestao {
  email: string;
  feedback: string;
}

const Sugestao: React.FC = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const feedback = formData.get('feedback') as string;

    try {
      const response = await fetch('URL_DA_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, feedback }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      alert('Sugestão enviada com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar a sugestão.');
    }
  };

  return (
    <>
      <section className="sugestao">
        <div className="content">
          <form action="" className="form-sugestao" onSubmit={handleSubmit}>
            <h2 className="subtitulo">Deixe sua sugestão abaixo</h2>
            <div className="container-form-sugestao">
              <div className="campo-form-sugestao" id="label1-sugestao">
                <label htmlFor="email">Digite seu email:</label>
              </div>
              <div className="campo-form-sugestao" id="input1-sugestao">
                <input type="email" name="email" required />
              </div>
              <div className="campo-form-sugestao" id="label2-sugestao">
                <label htmlFor="feedback">Deixe sua sugestão aqui:</label>
              </div>
              <div className="campo-form-sugestao" id="input2-sugestao">
                <textarea name="feedback" id="feedback"></textarea>
              </div>
            </div>
            <button className="btn-entrar" type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Sugestao;
