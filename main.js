//format number
var cleave = new Cleave('.cardnumber', {
    creditCard: true,
});

//format mm
var cleave = new Cleave('.date__mm', {
    date: true,
    datePattern: ['m']
});

//format yy
var cleave = new Cleave('.date__yy', {
    date: true,
    datePattern: ['y']
});

//format cvc
var cleave = new Cleave('.cvc', {
    blocks: [3],
    numericOnly: true,
});

 //translit
    function translit(word) {
    var answer = "";
    var converter = {
    а: "a", 
    б: "b", 
    в: "v", 
    г: "g", 
    д: "d", 
    е: "e", 
    ё: "e", 
    ж: "zh", 
    з: "z", 
    и: "i", 
    й: "y", 
    к: "k", 
    л: "l", 
    м: "m", 
    н: "n", 
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A", 
    Б: "B", 
    В: "V", 
    Г: "G", 
    Д: "D", 
    Е: "E", 
    Ё: "E", 
    Ж: "Zh", 
    З: "Z", 
    И: "I", 
    Й: "Y", 
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    };

    for (var i = 0; i < word.length; ++i) {
        if (converter[word[i]] == undefined) {
        answer += word[i];
        } else {
        answer += converter[word[i]];
        }
    }
    return answer;
    }


    //for cardholder
    $('.cardholder').on('input', function(){
        $(this).val(function(i, val){
            card_holder = translit(val).replace(/[^a-zа-яё\s]/gi, '').toUpperCase()
        if (!$('.cardholder').val() || card_holder === '') {$('.cardname__front').text('Jane Appleseed')} else $('.cardname__front').text(card_holder)
            return card_holder
        });
        return false;
        });

    //for cardnumber
        $('.cardnumber').on('input', function(){
            card_number = $('.cardnumber').val()
            if (!$('.cardnumber').val()) {$('.cardnumber__front').text('0000 0000 0000 0000')} else $('.cardnumber__front').text(card_number)
            });
    
    //for carddate_mm
    $('.date__mm').on('input', function(){
        card_mm = $('.date__mm').val()
        if (!$('.date__mm').val()) {$('.carddate__front_mm').text('00')} else $('.carddate__front_mm').text(card_mm)
        });

    //for carddate_yy
    $('.date__yy').on('input', function(){
        card_yy = $('.date__yy').val()
        if (!$('.date__yy').val()) {$('.carddate__front_yy').text('00')} else $('.carddate__front_yy').text(card_yy)
        });

    //for card_cvc
    $('.cvc').on('input', function(){
        card_cvc = $('.cvc').val()
        if (!$('.cvc').val()) {$('.cvc__back').text('100')} else $('.cvc__back').text(card_cvc)
        });       

    //click
    $(".feedback__input").submit(function (e) {
        e.preventDefault()
            $('.feedback__input_finish').css("display", "flex");
            $('.feedback__input').css("display", "none");
    });

    $(".button__return").click(function () {
            $('.feedback__input_finish').css("display", "none");
            $('.feedback__input').css("display", "block");
            $('input').val('')
    });
