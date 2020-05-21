// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").


$(document).ready(function() {
    // richiamo l'api per ottenere la lista dei dischi;
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            // recupero i dischi dall'api;
            var dischi = data.response;
            // ciclo ciascun oggetto dell'array e per ognuno stampo in pagina, sempre usando il template di handlebars, le informazioni che mi interessano;
            for (var i = 0; i < dischi.length; i++){
                var source = $("#my-template").html();
                var template = Handlebars.compile(source);
                var context = {
                    // recupero la cover;
                    'poster' : dischi[i].poster,
                    // recupero l'autore;
                    'author' : dischi[i].author,
                    // recupero l'anno;
                    'year' : dischi[i].year

                }
                var html = template(context);
                // stampo tutto in pagina;
                $('.cds-container.container').append(html);
            }


        },
        'error': function() {
            alert('si è verificato un errore');
        }
    })
});
