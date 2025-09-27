tablinks = document.getElementsByClassName("tab-links");
tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link"); //This loop removes the active-link class from all tab buttons (to "de-highlight" them).
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab"); //This loop removes active-tab from all content sections, hiding them.
    }
    event.currentTarget.classList.add("active-link"); //This adds the active-link class to the tab button that was clicked (highlighting it).
    document.getElementById(tabname).classList.add("active-tab"); //This adds the active-tab class to the content block that has the matching id (e.g., Skills, Experience, or Education), making it visible.
}



sidemenu = document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right = "0";
}
function closemenu()
{
    sidemenu.style.right = "-200px";
}