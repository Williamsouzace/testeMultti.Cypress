import functions from '../function/functions'
var signup = new functions

describe('Cenarios de teste', function () {
    
    it('Login com sucesso', function () {
        signup.entrar()
        signup.verficacaoLogin()
    })
    it('Verificação do filtro', function () {
        signup.entrar()
        signup.filtrar()
        signup.verificarFiltro()
    })
    it('Exportação de arquivo xls', function(){
        signup.entrar()
        signup.filtrar()
        signup.exportarXls()
    }) 
    it('Listar paginação na ultima tela', function () {
        signup.entrar()
        signup.entrarNfs()
        signup.clicarNaUltimaPagina()
        signup.listar100Itens()
        signup.verificarListaNfsE()
    })
    it('Filtrar na ultima pagina', function () {
        signup.entrar()
        signup.entrarNfs()
        signup.clicarNaUltimaPagina()
        signup.filtrarNfs()
        signup.verificarListaNfsE()
    })
    
})

