function escolha1(){
    var html = '<div class="container">';
    html += '<p> Você e ela conversam por horas na praça relembrando os bons momentos de sua juventude, tempos que não voltam mais, e ela comenta que está com fome. </p>';
    html += '<img src="casalconversando.jpg">';
    html += '<br>';
    html += '<button onclick="escolha3()"> Convida-lá há um restaurante </button>';
    html += '<button onclick="escolha4()"> Não convida </button>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    function escolha2(){
    var html = '<div class="container">';
    html += '<p> Você ao ignora-lá, ignora tambem seu coração, que ao chegar em casa, se afoga ainda mais em tristeza e em um ciclo de amargura sem fim... </p>';
    html += '<img src="pessoatriste.jpg">';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    function escolha3(){
    var html = '<div class="container">';
    html += '<p> Ela aceitou seu pedido, vocês conversaram mais ainda enquanto comiam saborosas, mas a hora da conta chegou </p>';
    html += '<img src="casaljantar.jpg">';
    html += '<br>';
    html += '<button onclick="escolha5()"> Pagar a conta total </button>';
    html += '<button onclick="escolha6()"> Falar que está sem dinheiro </button>';
    html += '<br>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    function escolha4(){
    var html = '<div class="container">';
    html += '<p> Vocês se despedem e ela vai para casa dela, e para você, só restou novamente aquele sentimento de abandono. </p>';
    html += '<img src="pessoatriste.jpg">';
    html += '<br>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    function escolha5(){
    var html = '<div class="container">';
    html += '<p> Ela ao ver tamanho de cavalheirismo, sente que está sendo tratada como uma dama, e te chama para a casa dela </p>';
    html += '<img src="pagarcasal.jpg">';
    html += '<br>';
    html += '<button onclick="escolha7()"> aceita o convite </button>';
    html += '<button onclick="escolha8()"> rejeita por conta que está na sua hora de dormir </button>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    function escolha6(){
    var html = '<div class="container">';
    html += '<p> Ela ao ver isso, vai embora desanimada para casa, e você, lava as louças do restaurante por que não pagou, e depois da loja fechar, vai se remoendo triste para casa </p>';
    html += '<img src="pessoatriste2.jpg">';
    html += '<br>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    
    function escolha7(){
    var html = '<div class="container">';
    html += '<p> Vocês ao chegar na casa dela, bebem mais e mais vinho, e ela te chama para deitar na cama pois já está tarde </p>';
    html += '<img src="eitarapaz.jpg">';
    html += '<br>';
    html += '<button onclick="escolha9()"> aceita o convite </button>';
    html += '<button onclick="escolha10()"> não aceita </button>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    function escolha8(){
    var html = '<div class="container">';
    html += '<p> Você até então se despede dela e vai para sua casa tranquilamente num onibus, mas ainda no onibus, você cai na real </p>';
    html += '<p> e descobre qual era as verdadeiras intenções dela e passa a viagem toda com a dor no peito sabendo que poderia ser além de um rolê. </p>';
    html += '<img src="pessoatriste2.jpg">';
    html += '<br>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    
    function escolha9(){
    var html = '<div class="container">';
    html += '<p> Vocês dormem juntos... Ao amanhecer, vocês se despedem e você vai para sua casa, sem culpa, e pensando qual será a proxima vez que ira ver aquele sorriso novamente... </p>';
    html += '<h3> FIM </h3>';
    html += '<img src="pensando.jpg">';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    
    
    
    function escolha10(){
    var html = '<div class="container">';
    html += '<p> Ao rejeitar, vocês se despedem e vão embora, cada um seguindo sua vida, ela triste, e você indo para casa com aquele sentimento de </p>';
    html += '<p> que poderia ser algo a mais, mas agora, são lembranças, amargas lembranças de alguém que você perdeu... </p>';
    html += '<img src="sentimentoabandono.jpg">';
    html += '<h3> Fim?... </h3>';
    html += '</div>'
    
    $( "body ").append( html );
    }
    
    