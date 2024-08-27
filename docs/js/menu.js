window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux/">Linux</li>',
        '<li><a href="https://grcodeclub.github.io/linux/terminal">Terminal</li>',
        '<li><a href="https://grcodeclub.github.io/linux/install">Εγκατάσταση Προγραμμάτων</li>',
        '<li><a href="https://grcodeclub.github.io/linux/files">Αρχεία</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux/orologia">Ορολογία</a></li>',
        '<li style="height: 200px;"></li>';
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
