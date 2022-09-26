

// $('#i1').click(()=>{
//     $('#ball').animate({left:'630px',top:'00px'},2000)
//     $('#ball').animate({top:'200px',left:'900px'},1000)

// })
// $('#i2').click(()=>{
//     $('#ball').animate({top:'0px',left:'600px'},2000)
//     $('#ball').animate({top:'180px',left:'300px'},1000)

// })


// $('button').click(()=>{
//     // $('p').remove('.text , #text')
//     // $('div').empty()
//     // $('p').detach()
//     // document.querySelector('div').classList.add('classAdd')   // by this we can add a class in javaScript 
//     $('p, small').addClass('classAdd new')   //in here we added tow class in our div with jQuery
// })

// $('#ad').click(()=>{
//     $('div , ul , li , span').addClass('sty')
// })

// $('#re').click(()=>{
//     $('span , ul').removeClass('sty')
// })

// $('#ad').click(()=>{
//     $('div , ul , li , span').toggleClass('sty')
// })

// $('#cssb').click(()=>{
//     $('#cssb').css('background-color' , 'orangered').addClass('btn btn-danger')
//     $('#cssb').css({'font-size' :'20px' , 'font-family':'cursive'})
// })

// $('#cssb').click(()=>{
//     // $('h1').clone().appendTo('span')
//     $('h1').wrapInner('<i><mark></mark></i>')
// })

// $('div , span,ul, li').addClass('sty')

// $('#ad').click(()=>{
//     // $('span').parent().css('border' , 'none')
//     // $('span').parents('ul').css('border-color' , 'red')
//     // $('span').parentsUntil('div').css('border-color' , 'red')
//     $('div').children().css('border-color' , 'red')

// })

// $('div , span,ul, li').addClass('sty')

$('#ad').click(()=>{
    // $('span').parent().css('border' , 'none')
    // $('span').parents('ul').css('border-color' , 'red')
    // $('span').parentsUntil('div').css('border-color' , 'red')
    $('div').children('p:first').css('color' , 'blue')

})



