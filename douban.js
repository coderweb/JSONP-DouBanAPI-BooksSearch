window.onload = function () {
    var searchTitle = document.getElementById("search-title");
    var liList = searchTitle.getElementsByTagName("li");
    
    
    // for (var i = 0; i < liList.length; i++) {
    //     liList[i].onclick = function () {
    //         alert(1);
    //         this.style.className = "active";
    //     }
    // }

    var oSearch =document.getElementById("search-input");
    var oSearchBtn=document.getElementById("search-button");
    oSearchBtn.onclick=function(){
        if (oSearch.value!="") {
            var script=document.createElement("script");
            script.src="https://api.douban.com/v2/book/search?q="+oSearch.value+"&alt=xd&callback=searchBook";
            document.body.appendChild(script);
        }
    }
}