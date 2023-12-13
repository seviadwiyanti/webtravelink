$(document).ready(()=>{
    $('#bgnya').on("mouseover",function(){
        console.log("mouseover")
        $('#bgnya').attr("class","bg1Mouseover")
    })
    $('#bgnya').on("mouseleave",function(){
        console.log("mouseleave")
        $('#bgnya').attr("class","bg1")
    })

    $('.more').hide()
    $('#show').on("click", () => {
        $('.more').show()
        $('#show').hide()
    })

    $('#tombol').on("click", () => {
        let kritik = $('#kritik').val()
        let saran = $('#saran').val()

        $('#vkritik').text(kritik)
        $('#vsaran').text(saran)
        $('#kritik').val("")
        $('#saran').val("")
    })

})