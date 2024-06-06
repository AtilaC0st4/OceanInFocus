'use client';

import React, { FormEvent } from 'react';
import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PageCadastro = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nome = formData.get('nome') as string;
        const dtNascimento = formData.get('dtNascimento') as string;
        const CPF = formData.get('CPF') as string;
        const email = formData.get('email') as string;
        const telefone = formData.get('telefone') as string;
        const nomeUsuario = formData.get('nomeUsuario') as string;
        const senha = formData.get('senha') as string;

        try {
            const response = await fetch('URL_DA_API_CADASTRO', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    dtNascimento,
                    CPF,
                    email,
                    telefone,
                    nomeUsuario,
                    senha,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }

            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao realizar o cadastro.');
        }
    };

    return (
        <>
            <HeaderInicial />

            <section className="login">
                <form action="" className="form-login" onSubmit={handleSubmit}>
                    <h1>Cadastre-se</h1>

                    <div className="container-forms">

                    <div className="campo-forms">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="nome" placeholder="Nome" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="dtNascimento">Data de nascimento:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="date" name="dtNascimento" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="CPF">CPF:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="CPF" placeholder="CPF" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="email">E-mail:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="tel" name="telefone" placeholder="Telefone" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="nomeUsuario">Nome de usuário:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="nomeUsuario" placeholder="Nome de usuário" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="senha">Senha:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    </div>
                    <button className="btn-entrar">Cadastre-se</button>
                </form>
            </section>

            <Footer />
        </>
    );
};

export default PageCadastro;
