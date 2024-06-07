'use client';
import React, { FormEvent } from 'react';
import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";
import Link from "next/link";

const PageLogin = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nome = formData.get('nome') as string;
        const senha = formData.get('senha') as string;

        // Substitua 'URL_DA_API_LOGIN' pela URL real do seu backend
        try {
            const response = await fetch('URL_DA_API_LOGIN', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, senha }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }

            // Aqui você pode redirecionar o usuário para outra página após o login bem-sucedido
            window.location.href = '/paginas/pageFeed/';

        } catch (error) {
            console.error(error);
            alert('Erro ao entrar. Verifique suas credenciais.');
        }
    };

    return (
        <>
            <HeaderInicial />

            <section className="login">
                <form action="" className="form-login" onSubmit={handleSubmit}>
                    <h1>Bem-vindo(a)</h1>

                    <div className="container-forms">
                        <div className="campo-forms">
                            <label htmlFor="nome">Nome de usuário:</label>
                        </div>
                        <div className="campo-forms">
                            <input type="text" name="nome" placeholder="Nome de usuário" />
                        </div>
                        <div className="campo-forms">
                            <label htmlFor="senha">Senha:</label>
                        </div>
                        <div className="campo-forms">                                                                                     
                            <input type="password" name="senha" placeholder="Senha"/>
                        </div>
                    </div>
                    <button className="btn-entrar" type="submit">Entrar</button>
                </form>
            </section>

            <Footer />
        </>
    );
};

export default PageLogin;
