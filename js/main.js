$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones').hide();
    $('.secciones:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones').hide()

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

/* Fix iOS 7 bug for -unit support */
var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
if(iOS){
    function iosVhHeightBug() {
        var height = $(window).height();
        $("#capa-para-redimensionar").css('min-height', height);
    }
 
    iosVhHeightBug();
    $(window).bind('resize', iosVhHeightBug);
}