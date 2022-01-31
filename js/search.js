

const searchIcon = document.querySelector(".fa-search");
const search = document.querySelector(".searchInput");


function searchEvent(){
    const searchStyle = search;
    const searchOpacity = searchStyle.style.opacity;
    if(searchOpacity === "1"){
      searchStyle.style.opacity="0";
    }else{
      searchStyle.style.opacity="1";
      searchStyle.style.transition ="opacity 0.3s ease-in-out";
    }
}

searchIcon.addEventListener("click", searchEvent);



//             ****      검색기능 구현       ****






    function filter() {
        let search = document.getElementById("search").value.toLowerCase();
        let userCompinent = document.getElementsByClassName("list-component");

        for (let i = 0; i < userCompinent.length; i++) {
          city = userCompinent[i].getElementsByClassName("list-title");
          country = userCompinent[i].getElementsByClassName("list-subtitle");
          if (city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            country[0].innerHTML.toLowerCase().indexOf(search) != -1
          ) {
            userCompinent[i].style.display = "flex"
          } else {
            userCompinent[i].style.display = "none"
          }
        }
      }


