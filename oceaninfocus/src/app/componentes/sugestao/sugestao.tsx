const Sugestao = () => {
    return (
        <>
            <section className="sugestao">

                <div className="content">

                    <form action="" className="form-sugestao">

                        <h2 className="subtitulo">Deixe sua sugestão abaixo</h2>

                        <div className="container-form-sugestao">

                            <div className="campo-form-sugestao" id="label1-sugestao">
                                <label htmlFor="email">Digite seu email:</label>
                            </div>

                            <div className="campo-form-sugestao" id="input1-sugestao">
                                <input type="email" name="email" required></input>
                            </div>

                            <div className="campo-form-sugestao" id="label2-sugestao">
                                <label htmlFor="feedback">Deixe sua sugestão aqui:</label>
                            </div>

                            <div className="campo-form-sugestao" id="input2-sugestao">
                                <textarea name="feedback" id="feedback" ></textarea>
                            </div>

                        </div>

                        <button className="btn-entrar">Enviar</button>
                    </form>

                </div>

            </section>
        </>
    )
}
export default Sugestao;