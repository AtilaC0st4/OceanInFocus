const Sugestao = () => {
    return (
        <>
            <section className="sugestao">

                <div className="content">

                    <form action="" className="form-sugestao">

                        <h2 className="subtitulo">Deixe sua sugestão abaixo</h2>

                        <div className="campo-form-sugestao">
                            <label htmlFor="email">Digite seu email:</label>
                            <div><input type="email" name="email" required></input></div>
                            
                        </div>

                        <div className="campo-form-sugestao">
                            <label htmlFor="feedback">Deixe sua sugestão aqui:</label>
                            <div><textarea name="feedback" id="feedback" ></textarea></div>
                            
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}
export default Sugestao;