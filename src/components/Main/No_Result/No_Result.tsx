import './No_Result.css'
const No_Result = (props:any) => {
    const googleLookUp = `https://www.google.com/search?q=${props.input}+meaning&rlz=1C1CHBF_enIR879IR879&sxsrf=AOaemvJ0mR6Q_uzLqmUsRNhNYIxd7KKRag%3A1632479977002&ei=6KpNYdq-PIGE9u8P3KS-kA8&oq=man+meanin&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABQAFgAYLVEaABwAXgAgAEAiAEAkgEAmAEA&sclient=gws-wiz&ved=0ahUKEwja0obptZfzAhUBgv0HHVySD_IQ4dUDCA4`

    return (
            <div className='noResult'>
                <div>
                        Sorry we couln't find any results for the word: "{props.input}". <br />
                <a href={googleLookUp} target='_blank'>
                        You may look it up here </a>
                </div>
            </div>
    )
}

export default No_Result;