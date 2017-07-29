// https://swapi.co/api/films/
$(document).ready(function() {
    var escolha=prompt('Escolha um numero (inteiro) entre 1 e 7 para o filme');
    var ie=parseInt(escolha);
    while (ie<1||ie>7){
        escolha=prompt('Desculpe, mas a sua escolha é inválida. Escolha um numero (inteiro) entre 1 e 7 para seu filme');
        ie=parseInt(escolha);
    }
    ie--;
    var escolha2=prompt('Agora,escolha um numero (inteiro) entre 1 e 87 para o personagem');
    var ie2=parseInt(escolha2);
    while (ie2<1||ie2>87){
        escolha2=prompt('Desculpe, mas a sua escolha é inválida. Escolha um numero (inteiro) entre 1 e 87 para seu personagem');
        ie2=parseInt(escolha2);
    }
    ie2--;
    var ie3=ie2+10;
    $.ajax({
        url: 'https://swapi.co/api/films/',
        success: function(filme) {
            console.log(filme.results);
            var mostrar = filme.results[ie];
            $('#tit').html('Título: '+mostrar.title);
            $('#epis').html('Ep. Nº: '+mostrar.episode_id);
            $('#fra').html('Frase de Abertura: '+mostrar.opening_crawl);
            $('#direc').html('Diretor: '+mostrar.director);
            $('#prod').html('Produtor: '+mostrar.producer);
            var arr =mostrar.release_date.split("-");
            $('#lanc').html('Data de Lançamento: '+arr[2]+'/'+arr[1]+'/'+arr[0]);



        },
        error: function(error) {
            console.log(error);
        }
    });
        $.ajax({
            url: 'https://swapi.co/api/people/?page='+((ie3-(ie3%10))/10),
            success: function(pers) {
                console.log(pers.results);
                console.log('ok');
                ie2=ie2%10;
                var mostrar2 = pers.results[ie2];
                $('#name').html('Nome: '+mostrar2.name);
                $('#altu').html('Altura: '+mostrar2.height);
                $('#corCb').html('Cor do Cabelo: '+mostrar2.hair_color.charAt(0).toUpperCase()+mostrar2.hair_color.slice(1));
                $('#corPl').html('Cor dos Olhos: '+mostrar2.eye_color.charAt(0).toUpperCase()+mostrar2.eye_color.slice(1));
                $('#corOl').html('Cor da Pele: '+mostrar2.skin_color.charAt(0).toUpperCase()+mostrar2.skin_color.slice(1));
                $('#gene').html('Gênero: '+mostrar2.gender.charAt(0).toUpperCase()+mostrar2.gender.slice(1));



            },
            error: function(error) {
                console.log(error);
            }
        });
});