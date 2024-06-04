const Sugestao = () => {
    return (
        <>
            <section className="sugestao">

                <div className="content">

                    <form action="" className="form-sugestao">

                        <h2 className="subtitulo">Deixe sua sugestão abaixo</h2>

                        <div className="campo-form-sugestao">
                            <label htmlFor="email">Digite seu email:</label>
                            <input type="email" name="email" required></input>
                        </div>

                        <div className="campo-form-sugestao">
                            <label htmlFor="feedback">Deixe sua sugestão aqui:</label>
                            <textarea name="feedback" id="feedback" rows={10} cols={10}></textarea>
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}
export default Sugestao;