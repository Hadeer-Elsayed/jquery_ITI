$(function()
{
    $(".all").hide();
    $(".btn_about").click(function()
    {
    // hide divs of all button and open only "about" div
        $(".all").hide();
        $("#about").show().html("Story About Snow man").addClass("about");    
    })

    $(".btn_gallery").click(function()
    {
    // hide divs of all button and open only "gallery" div
        $(".all").hide();
        $("#gallery").show();
    })

    //make circular slider
    var i=1;
    $(".next_btn").click(function()
    {
        if(i>=8)
        {
            i=0;
        }
        $(".center").attr("src","../images/"+(++i)+".jpg")
    })
    $(".previous_btn").click(function()
    {
        if(i==1)
        {
            i=9;
        }
        $(".center").attr("src","../images/"+(--i)+".jpg")
    })
    

    //make list of services
    $(".btn_services").click(function()
    {
        $(".all").hide();
        $("#services").show();
        $(".btn_serv").slideToggle("slow");////////////////////////////////////////////////////
    })


    //complain part

    $(".btn_complain").click(function()
    {
        $(".all").hide();
        $("#complain_sec").show();

    })

    $("#send_btn").click(function()
    {
        $(".all").hide();
        var c_name=$("#c_name")[0].value;
        var c_email=$("#email")[0].value;
        console.log(c_email)
        var c_phone=$("#phone")[0].value;
        console.log(c_phone);
        var c_complain=$("#text_complain")[0].value
        console.log(c_complain)

        $("#send_complain").show().html(`<p>Your complain is `+c_complain+`</p>
        <p> Your name is `+c_name+`</p>
        <p>Your email is `+c_email+`</p>
        <p>Your phone is `+c_phone+`</p><input id="btn_edit" type="button" value="Back to edit">`);


        $("#btn_edit").click(function()
        {
            $(".all").hide();
            $("#complain_sec").show();

        })

       

    })
   
    
})  