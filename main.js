// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").


$(document).ready(function() {
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            // recupero i dischi dall'api;
            var dischi = data.response;
            console.log(dischi);


        },
        'error': function() {
            alert('si è verificato un errore');
        }
    })
});
